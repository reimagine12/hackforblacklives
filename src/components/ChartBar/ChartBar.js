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

  const updateHeight = (delta) => {
    const domElement = document.getElementById(`chartBar-${data.id}`);
    const dollarsPerPixel = Math.floor(max / domElement.clientHeight);
    const changeInDollars = Math.abs(delta.height * dollarsPerPixel);
    if (delta.height > 0) {
      increaseBudget(changeInDollars, data.id);
      decreaseBudget(changeInDollars, 0);
    } else {
      decreaseBudget(changeInDollars, data.id);
      increaseBudget(changeInDollars, 0);
    }
  };

  // Converts number to simpler decimal
  function simpleNum(){
    var num = state.updatedValue * .00000001
    return num.toFixed(1)
  }

  // Adds Million or Billion depedning on the numbers value
  function millBill() {
    var str = state.updatedValue.toString();
    var n = str.length;
    
    if (n <= 9 && n < 11) {
    return 'Million';
  } else { 
    return 'Billion';
  }
  }

  return (
    <div className='chartBar' id={`chartBar-${data.id}`}>
      <div className='chartBar-label'>{data.label} <br /> ${simpleNum()} {millBill()}</div>
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
          updateHeight(delta);
        } : null}
      />
    </div>
  );
}

export default ChartBar;

//When I hover over the bar, show the full number amount
//onmouseover()
//Full number = state.updatedValue.toLocaleString()

// document.getElementByC("demo").onmouseover
