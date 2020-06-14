import React from 'react';
import './ChartScale.css';

const ChartScale = (props) => {
    let labels = ['1 Billion', '2 Billion', '3 Billion', '4 Billion', '5 Billion', '6 Billion']; 
    let height = 800; 
    
    return (
        <div className="chart-scale">
            <div className="chart-scale__label-container">
                {labels.map((text, index) => <div style={{height: height / labels.length}} className="chart-scale__label" key={index}>{text}</div>)}
            </div>
        </div>
    )
};
    
export default ChartScale;
