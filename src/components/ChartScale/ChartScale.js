import React from 'react';
import './ChartScale.css';

const ChartScale = (props) => {
    let labels = ['1 Billion', '2 Billion', '3 Billion', '4 Billion', '5 Billion', '6 Billion']; 
    let height = 100; 
    
    return (
        <div className="chart-scale">
            <div className="chart-scale__label-container">
                {labels.map((text, index) => 
                    <div style={{height: `${height / labels.length}%`}} className="chart-scale__label" key={index}>
                        <div className="chart-scale__label__text">{text}</div>
                        <div className="chart-scale__label__number">{index + 1}</div>
                    </div>)}
            </div>
        </div>
    )
};
    
export default ChartScale;
