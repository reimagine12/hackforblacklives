import React from 'react';
import './ChartBar.css';

function ChartBar(props) {
  const { data, increaseBudget, decreaseBudget } = props;
  const state = {
    dragging: false,
    lastMouseY: null,
    originalValue: data.budget,
    updatedValue: data.budget,
    maxValue: 20000000
  };

  const getHeight = () => state.updatedValue/state.maxValue * 100 + '%';

  const updateHeight = e => {
    const delta = state.lastMouseY-e.clientY;
    const domElement = document.getElementById(`chartBar-${data.id}`);
    const dollarsPerPixel = Math.floor(state.maxValue / domElement.clientHeight);
    delta > 0 
      ? increaseBudget(delta * dollarsPerPixel, data.id) 
      : decreaseBudget(delta * -1 * dollarsPerPixel, data.id);
  };

  const startDrag = e => {
    console.log("starting ", e.target.id);
    state.dragging = true;
    state.lastMouseY = e.clientY;
    window.onmousemove = updateHeight;
  };

  const stopDrag = e => {
    console.log("stopping ", e.target.id);
    state.dragging = false;
    state.lastMouseY = null;
    window.onmousemove = null;
  };

  return (
    <div className='chartBar' id={`chartBar-${data.id}`}>
      <div className='chartBar-label'>{data.label} - ${state.updatedValue.toLocaleString()}</div>
      <div className='chartBar-color' 
        style={{
          backgroundColor: data.color, 
          height: getHeight()
          }} 
        onMouseDown={startDrag}
        onMouseUp={stopDrag}
        onMouseLeave={state.dragging ? stopDrag : null}
        />
    </div>
  );
}

export default ChartBar;
