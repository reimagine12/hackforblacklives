import React, { Component } from 'react';
import ChartScale from '../ChartScale/ChartScale'
import { categories, data, max } from '../../config.js';
import ChartBar from './../ChartBar/ChartBar';
import Track from '../Track/Track';
import './Chart.css';


export default class Chart extends Component {

  state = {
    categories: categories.map(category => ({
      id: data[category].id,
      name: category,
      label: data[category].title,
      amount: data[category].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    })).sort(this.sortById),
    outcomeCategories: [],
  }

  getDataById = (categoryName) => data[categories[categoryName]];
  getCategoryById = (categories, id) => categories.find(category => category.id === id);
  sortById = (a, b) => a.id - b.id;

  checkTotals = (policeAmount) => {
    // checks whether the police budget has been reset to initial amount. if so, remove outcomes.
    if (policeAmount >= data.police.initial_amount) {
      console.log('checktotals', policeAmount)
      this.setState({outcomeCategories: []})
    }
  }
  
  increase = (value, category) => {
    const police = this.getCategoryById(this.state.categories, 0);
    const currentCategory = this.getCategoryById(this.state.categories, category);
    console.log('increase', 'curCat:', currentCategory, 'val:', value)

    if (currentCategory.id === 0) {
      if (value + police.amount > data.police.initial_amount) {
        // do not increase police budget if more than initial amount
        // this.checkTotals(value + police.amount);
        return;
      }
    }

    if (police.amount === 0 && currentCategory.id !== 0) {
      this.setState({
        police: { amount: 0 },
      });
      
      return;
    }

    if (currentCategory.id !== 0) {
      if (police.amount <= 100000000) { 
        // when values become too small to adjust with the bars, set police amount to zero.
        value = value + police.amount;
        police.amount = 0;
      }
    }

    const newAllocation = currentCategory.amount + value
    if (newAllocation > max) {
      return;
    }

    const denom = this.getDataById(category).per_unit
    const outcomeNumber = Number(Math.floor(newAllocation / denom))
    let newOutcomes = this.state.outcomeCategories;
    if (outcomeNumber > 0 && !this.state.outcomeCategories.includes(category)) {
      newOutcomes = [category, ...this.state.outcomeCategories];
    } 
    const newCategories = [...this.state.categories.filter(cat => cat.id !== category), { 
      ...currentCategory,
      amount: currentCategory.amount + value, 
      allocation: newAllocation, 
      outcomeNumber: outcomeNumber,
    }].sort(this.sortById);

    this.setState({
      categories: newCategories,
      police: { amount: police.amount - value },
      outcomeCategories: newOutcomes,
    });

    this.checkTotals(this.state.police.amount);
  }

  decrease = (value, category) => {
    const police = this.getCategoryById(this.state.categories, 0);
    const currentCategory = this.getCategoryById(this.state.categories, category);
    const newAmount = currentCategory.amount - value;
    console.log('decrease', 'curCat:', currentCategory, 'val:', value, 'newamnt:', newAmount)

    if (category !== 0 || newAmount < 0) {
      if (newAmount < this.getDataById(category).initial_amount) {
        console.log('decrease:', this.getDataById(category))
        return;
      }
    }

    const newAllocation = currentCategory.allocation - value;
    const denom = this.getDataById(category).per_unit
    const outcomeNumber = Number(Math.floor((newAllocation / denom)))
    let newOutcomes = this.state.outcomeCategories;
    if (outcomeNumber < 1 && this.state.outcomeCategories.includes(category)) {
      const index = newOutcomes.indexOf(category);
      if (index > -1) {
        newOutcomes.splice(index, 1);
      }
    } 

    const newCategories = [...this.state.categories.filter(cat => cat.id !== category), { 
      ...currentCategory,
      amount: newAmount, 
      allocation: newAllocation, 
      outcomeNumber: outcomeNumber,
    }].sort(this.sortById);

    this.setState({
      categories: newCategories,
      police: { amount: police.amount + value },
      outcomeCategories: newOutcomes,
    });

    this.checkTotals(this.state.categories[0].amount);
  }

  render() {
    return (
      <React.Fragment>
        <div className='chart__container'>
          <div className="chart">
            <div className="chartBars">
              <ChartScale />
              <div className="chartBars__wrapper">
                {this.state.categories.map((service, i) => <ChartBar key={i} order={i} data={service} increaseBudget={this.increase} decreaseBudget={this.decrease} />)}
              </div>
            </div>
          </div>
        </div>
        <Track outcomes={this.state.outcomeCategories} categories={this.state.categories} getCategoryById={this.getCategoryById} policeAmount={this.state.categories[0].amount} />
      </React.Fragment>
    )
  }
}
