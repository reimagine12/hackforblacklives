import React, { Component } from 'react';
import './Chart.css';
import ChartBar from './../ChartBar/ChartBar';
import { data, max } from '../../config.js';


export default class Chart extends Component {

  state = {
    categories: data.map(category => ({
      id: category.id,
      label: category.title,
      amount: category.initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    })).sort(),
    outcomeCategories: [],
  }

  getCategoryById = (categoryName, dataSet = this.state.categories) => dataSet.find(category => category.id === categoryName);

  increase = (value, category) => {
    console.log('increasing', category);
    const police = this.getCategoryById('police');
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
    this.setState({
      categories: [...this.state.categories.filter(cat => cat.id !== category), { 
        ...currentCategory,
        amount: currentCategory.amount + value, 
        allocation: newAllocation, 
        outcomeNumber: outcomeNumber,
      }].sort(),
      police: { amount: police.amount - value },
      outcomeCategories: newOutcomes,
    })
  }

  decrease = (value, category) => {
    console.log('decreasing', category);

    const police = this.getCategoryById('police');
    const currentCategory = this.getCategoryById(category);
    const newAmount = currentCategory.amount - value;

    if (newAmount < this.getCategoryById(category, data).initial_amount) {
      return;
    }

    const newAllocation = currentCategory.allocation - value;
    const outcomeNumber = Number(Math.floor((newAllocation / this.getCategoryById(category, data).per_unit)))
    let newOutcomes = this.state.outcomeCategories;

    if (outcomeNumber < 1 && this.state.outcomeCategories.includes(category)) {
      const index = newOutcomes.indexOf(category);
      if (index > -1) {
        newOutcomes.splice(index, 1);
      }
    } 

    this.setState({
      categories: [...this.state.categories.filter(cat => cat.id !== category), { 
        ...currentCategory,
        amount: newAmount, 
        allocation: newAllocation, 
        outcomeNumber: outcomeNumber,
      }].sort(),
      police: { amount: police.amount + value },
      outcomeCategories: newOutcomes,
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="chart">
          <div className="chartBars">
            {this.state.categories.map((service, i) => <ChartBar key={i} order={i} data={service} increaseBudget={this.increase} decreaseBudget={this.decrease} />)}
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
  };
}