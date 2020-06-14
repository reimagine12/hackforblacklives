import React from 'react';

import { inject, observer } from 'mobx-react';
import ChartScale from '../ChartScale/ChartScale'
import { categories, data } from '../../config.js';
import './Chart.css';

const Chart = inject('store')(observer(({store}) => {

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
            {store.state[category].amount}
          </div>
          <button onClick={() => store.increase(1000000, category)}>+</button>
          <button onClick={() => store.decrease(1000000, category)}>-</button>
        </div>
        ))}
      </div>
    </div>
  );
}));
export default Chart;

