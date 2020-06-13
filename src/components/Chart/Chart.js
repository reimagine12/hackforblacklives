import React, { Component } from 'react';
import { categories, data } from '../../config.js';


export default class Chart extends Component {

  state = {
    police: {
      amount: data['police'].initial_amount,
      allocation: 0,
    },
    community_garden: {
      amount: data['community_garden'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    education: {
      amount: data['education'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    free_transportation: {
      amount: data['free_transportation'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    head_start: {
      amount: data['head_start'].initial_amount,
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
    ppe: {
      amount: data['ppe'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    school_nurses: {
      amount: data['school_nurses'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    seniors: {
      amount: data['seniors'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    street_resurfacing: {
      amount: data['street_resurfacing'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    ventilators: {
      amount: data['ventilators'].initial_amount,
      allocation: 0,
      outcomeNumber: 0,
    },
    outcomeCategories: [],
  }

  increase = (value, category) => {
    const newAmount = this.state[category].amount + value
    const newAllocation = this.state[category].allocation + value
    const policeAmount = this.state['police'].amount - value
    const outcomeNumber = Number(Math.floor((newAllocation / data[category].per_unit)))

    let newOutcomes = this.state.outcomeCategories;
    if (outcomeNumber > 0 && !this.state.outcomeCategories.includes(category)) {
      newOutcomes = [category, ...this.state.outcomeCategories]
    } 

    this.setState({
      [category]: { 
        amount: newAmount, 
        allocation: newAllocation, 
        outcomeNumber: outcomeNumber
      },
      police: { amount: policeAmount },
      outcomeCategories: newOutcomes,
    })
  }

  decrease = (value, category) => {
    const newAmount = this.state[category].amount - value
    const newAllocation = this.state[category].allocation - value
    const policeAmount = this.state['police'].amount + value
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
        outcomeNumber: outcomeNumber
      },
      police: { amount: policeAmount },
      outcomeCategories: newOutcomes,
    })
  }

  render() {
    return (
      <div>
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