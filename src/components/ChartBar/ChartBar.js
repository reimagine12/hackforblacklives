import React from 'react';
import './ChartBar.css';
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

  const updateHeight = e => {
    const delta = state.lastMouseY-e.clientY;
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

  const startDrag = e => {
    state.dragging = true;
    state.lastMouseY = e.clientY;
    window.onmousemove = updateHeight;
  };

  const stopDrag = e => {
    state.dragging = false;
    state.lastMouseY = null;
    window.onmousemove = null;
  };

  return (
    <div className='chartBar' id={`chartBar-${data.id}`}>
      <div className='chartBar-label'>{data.label} - ${state.updatedValue.toLocaleString()}</div>
      <div className='chartBar-color' 
        style={{
          backgroundColor: barColors[order], 
          height: getHeight()
          }} 
        onMouseDown={interactions ? startDrag : null}
        onMouseUp={interactions ? stopDrag : null}
        onMouseLeave={state.dragging && interactions !== 0 ? stopDrag : null}
        />
    </div>
  );
}

export default ChartBar;
