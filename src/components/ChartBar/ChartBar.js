import React from 'react';
import './ChartBar.css';
import { Rnd } from 'react-rnd';
import { max, barColors } from '../../config.js';

function ChartBar(props) {
  const { data, increaseBudget, decreaseBudget, order } = props;
  const state = {
    dragging: false,
    lastMouseY: null,
    updatedValue: data.amount
  };

  // Police bar doens't get interactions
  const interactions = order !== 0;

  const getHeight = () => state.updatedValue/max * 100 + '%';

  const updateHeight = delta => {
    const domElement = document.getElementById(`chartBar-${data.id}`);
    const dollarsPerPixel = Math.floor(max / domElement.clientHeight);
    const changeInDollars = Math.abs(delta + dollarsPerPixel);
    if (delta > 0) {
      increaseBudget(changeInDollars, data.id);
      decreaseBudget(changeInDollars, 1);
    } else {
      decreaseBudget(changeInDollars, data.id);
      increaseBudget(changeInDollars, 1);
    }
  };


  return (
    <div className='chartBar' id={`chartBar-${data.id}`}>
      <div className='chartBar-label'>{data.label} - ${state.updatedValue.toLocaleString()}</div>
      <Rnd className='chartBar-color'
        style={{
          backgroundColor: barColors[order]
        }} 
        default={{
          width: 30,
          height: 100,
        }}
        size={{ width: 30,  height: getHeight() }}
        onResizeStop={interactions ? (e, direction, ref, delta) => {
          console.log({
            width: ref.style.width,
            height: ref.style.height
          });
          updateHeight(delta);
        } : null}
      />
    </div>
  );
}

export default ChartBar;
