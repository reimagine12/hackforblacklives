import React from 'react';
import './ChartBar.css';

function ChartBar(props) {
  const { data } = props;
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
    console.log('dragged', delta);
    //convert pixel delta into percentage of total height, then add percentage to updated value
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
    <div className='chartBar'>
      <div className='chartBar-label'>{data.label} - ${state.updatedValue.toLocaleString()}</div>
      <div id={`chartBar-${data.id}`} className='chartBar-color' 
        style={{
          backgroundColor: data.color, 
          height: getHeight()
          }} 
        onMouseDown={startDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        />
    </div>
  );
}

export default ChartBar;
