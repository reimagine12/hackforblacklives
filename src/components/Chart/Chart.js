import React from 'react';
import './Chart.css';
import ChartBar from './../ChartBar/ChartBar';

function Chart() {
  const state = {
    services: [
      {id: 'health', label: 'Health', budget: 1000000, color: '#F807B1'},
      {id: 'homeless', label: 'Homeless Services', budget: 1100000, color: '#C107D9'},
      {id: 'seniors', label: 'Seniors', budget: 1200000, color: '#9B13F0'},
      {id: 'education', label: 'Education', budget: 1300000, color: '#4F07D9'},
      {id: 'ppe', label: 'PPE for essential workers', budget: 1400000, color: '#1907F8'},
      {id: 'ventilators', label: 'Ventilators', budget: 1500000, color: '#0C31F8'},
      {id: 'nurses', label: 'School Nurses', budget: 1600000, color: '#0B61D9'},
      {id: 'transportation', label: 'Transportation', budget: 1700000, color: '#00A6F0'},
      {id: 'arts', label: 'Arts and Culture', budget: 1800000, color: '#0BCED9'},
      {id: 'gardens', label: 'Community Gardens', budget: 1900000, color: '#0CF8C3'},
      {id: 'mentalhealth', label: 'Mental Health', budget: 2000000, color: '#0BD967'},
      {id: 'headstart', label: 'Head Start', budget: 2100000, color: '#00F028'},
    ]
  }

  const increase = (amount, service) => {
    console.log("increasing ", service, " by ", amount);
  }

  const decrease = (amount, service) => {
    console.log("decreasing ", service, " by ", amount);
  }

  return (
    <div className="chart">
      <div className="chartBars">
        {state.services.map(service => <ChartBar key={service.id} data={service} increaseBudget={increase} decreaseBudget={decrease} />)}
      </div>
    </div>
  );
}

export default Chart;
