import React, { Component } from 'react';
import ChartScale from '../ChartScale/ChartScale'
import { categories, data, max } from '../../config.js';
import './Chart.css';
import ChartBar from './../ChartBar/ChartBar';


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

  getCategoryById = (categoryName) => this.state.categories.find(category => category.id === categoryName);
  getDataById = (categoryName) => data[categories[categoryName]];
  sortById = (a, b) => a.id - b.id;
  
  increase = (value, category) => {
    // console.log('increasing', category);
    const police = this.getCategoryById(1);
    const currentCategory = this.getCategoryById(category);

    if (police.amount === 0) {
      const allOutcomes = ['police', ...this.state.outcomeCategories]
      this.setState({
        outcomeCategories: allOutcomes,
      });
      return;
    }
    const newAllocation = currentCategory.allocation + value
    if (newAllocation > max) {
      return;
    }
    const outcomeNumber = Number(Math.floor((newAllocation / this.getCategoryById(category).per_unit)))
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
    })
  }

  decrease = (value, category) => {
    // console.log('decreasing', category);

    const police = this.getCategoryById(1);
    const currentCategory = this.getCategoryById(category);
    const newAmount = currentCategory.amount - value;

    if (newAmount < this.getDataById(category).initial_amount) {
      return;
    }

    const newAllocation = currentCategory.allocation - value;
    const outcomeNumber = Number(Math.floor((newAllocation / this.getDataById(category).per_unit)))
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
    })
  }

  render() {
    return (
      <div>
        <div className="chart">
          <div className="chartBars">
            <ChartScale />
            <div className="chartBars__wrapper">
              {this.state.categories.map((service, i) => <ChartBar key={i} order={i} data={service} increaseBudget={this.increase} decreaseBudget={this.decrease} />)}
            </div>
          </div>
        </div>
        <div>
          <div>OUTCOMES</div>
            { this.state.outcomeCategories.map(outcomeCategory => {
              const category = this.getCategoryById(outcomeCategory);
              const categoryFromData = this.getCategoryById(outcomeCategory, data);
              return (
              <div>
                You funded { category.outcomeNumber } {categoryFromData.impact} !
              </div>
              );
            })}
        </div>
      </div>
    )
  }
}
