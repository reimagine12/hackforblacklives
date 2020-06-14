import React, { Component } from 'react';
import ChartScale from '../ChartScale/ChartScale'
import { categories, data, max } from '../../config.js';
import './Chart.css';
import ChartBar from './../ChartBar/ChartBar';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

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
    })
  }

  decrease = (value, category) => {
    const police = this.getCategoryById(1);
    const currentCategory = this.getCategoryById(category);
    const newAmount = currentCategory.amount - value;

    if (newAmount < this.getDataById(category).initial_amount) {
      return;
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
    })
  }

  render() {
    return (
      <div className='chart__container'>
        <div className="chart">
          <div className="chartBars">
            {this.state.categories.map((service, i) => <ChartBar key={i} order={i} data={service} increaseBudget={this.increase} decreaseBudget={this.decrease} />)}
          </div>
          <ChartScale />
        </div>
        <div style={{position: 'relative', height: '470px'}}>
          <div style={{width: '100%', width: 360, border: '10px solid rgba(255, 255, 255, 0.5)', overflow: 'auto', maxHeight: '100%'}}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                 <b>Achievements</b>
              </ListItem>
            { this.state.outcomeCategories.map(outcomeCategory => {
              const category = this.getCategoryById(outcomeCategory);
              return (
                <div>
                  <Divider style={{border: '2px solid rgba(255, 255, 255, 0.5)'}}/>
                  <ListItem button>
                    <ListItemIcon>
                      <img src={data[category.name].image} style={{marginRight: '15px', height: '65px'}}></img>
                    </ListItemIcon>
                     You funded {category.outcomeNumber.toLocaleString()} {data[category.name].impact}!
                  </ListItem>
                </div>
              );
            })}
            </List>
          </div>
        </div>
      </div>
    )
  }
}
