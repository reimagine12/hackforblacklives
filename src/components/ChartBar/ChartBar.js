import React from 'react';
import './ChartBar.css';

function ChartBar(props) {
  const { data } = props;
  const state = {
    dragging: false,
    originalValue: data.budget,
    updatedValue: data.budget,
    maxValue: 20000000
  };

  const getHeight = () => state.updatedValue/state.maxValue * 100 + '%';

  return (
    <div id={`chartBar-${data.id}`} className='chartBar'>
      <div className='chartBar-label'>{data.label} - ${state.updatedValue.toLocaleString()}</div>
      <div className='chartBar-color' style={{backgroundColor: data.color, height: getHeight()}}>
      </div>
    </div>
  );
}

export default ChartBar;
