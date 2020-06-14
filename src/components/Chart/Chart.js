import React, { Component } from 'react';
import ChartScale from '../ChartScale/ChartScale'
import { categories, data, max } from '../../config.js';
import './Chart.css';


export default class Chart extends Component {

  state = {
    police: {
      amount: data['police'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    small_business_services: {
      amount: data['small_business_services'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    homeless_services: {
      amount: data['homeless_services'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    mental_health: {
      amount: data['homeless_services'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    health_and_hospitals: {
      amount: data['health_and_hospitals'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    seniors: {
      amount: data['seniors'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    infrastructure: {
      amount: data['infrastructure'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    veterans_services: {
      amount: data['veterans_services'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    arts_and_culture: {
      amount: data['arts_and_culture'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    fire_and_ems: {
      amount: data['fire_and_ems'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    housing: {
      amount: data['housing'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    head_start: {
      amount: data['head_start'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    outcomeCategories: [],
  }

  increase = (value, category) => {
    if (this.state.police.amount === 0) {
      const allOutcomes = ['police', ...this.state.outcomeCategories]
      this.setState({
        outcomeCategories: allOutcomes,
      });
      return;
    }
    const newAllocation = this.state[category].allocation + value
    if (newAllocation > max) {
      return;
    }
    const outcomeNumber = Number(Math.floor((newAllocation / data[category].per_unit)))
    let newOutcomes = this.state.outcomeCategories;
    if (outcomeNumber > 0 && !this.state.outcomeCategories.includes(category)) {
      newOutcomes = [category, ...this.state.outcomeCategories];
    } 
    this.setState({
      [category]: { 
        amount: this.state[category].amount + value,
        allocation: newAllocation, 
        outcomeNumber: outcomeNumber
      },
      police: { amount: this.state['police'].amount - value },
      outcomeCategories: newOutcomes,
    })
  }

  decrease = (value, category) => {
    const newAmount = this.state[category].amount - value;
    if (newAmount < data[category].initial_amount) {
      return;
    }
    const newAllocation = this.state[category].allocation - value;
    const outcomeNumber = Number(Math.floor((newAllocation / data[category].per_unit)))
    let newOutcomes = this.state.outcomeCategories;
    if (outcomeNumber < 1 && this.state.outcomeCategories.includes(category)) {
      const index = newOutcomes.indexOf(category);
      if (index > -1) {
        newOutcomes.splice(index, 1);
      }
    } 

    this.setState({
      [category]: { 
        amount: newAmount, 
        allocation: newAllocation, 
        outcomeNumber: outcomeNumber,
      },
      police: { amount: this.state['police'].amount + value },
      outcomeCategories: newOutcomes,
    })
  }

  render() {
    return (
      <div>
        <div className="chart">
          <ChartScale />
        </div>
      <div>
        {categories.map(category => (
          <div key={data[category].id}>
            <div>
              {data[category].title}
              {' '}
              {this.state[category].amount}
            </div>
            <button onClick={() => this.increase(1000000, category)}>+</button>
            <button onClick={() => this.decrease(1000000, category)}>-</button>
          </div>
        ))}
        </div>
        <div>
          <div>OUTCOMES</div>
            { this.state.outcomeCategories.map(outcomeCategory => (
              <div>
                You funded { this.state[outcomeCategory].outcomeNumber } {data[outcomeCategory].impact} !
              </div>
            ))}
        </div>
      </div>
    )
  }
}
