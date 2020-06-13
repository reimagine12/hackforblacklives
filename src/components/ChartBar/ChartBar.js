import React from 'react';
import './ChartBar.css';

function ChartBar(props) {
  const { data } = props;

  return (
    <div id={`chartBar-${data.id}`} className='chartBar' style={{backgroundColor: data.color}}>
      {data.label} - ${data.budget.toLocaleString()}
    </div>
  );
}

export default ChartBar;
