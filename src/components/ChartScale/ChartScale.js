import React from 'react';
import './ChartScale.css';

const ChartScale = (props) => {
    let width = 1000; // will need to change size based on grid/layout
    let height = 600;
    let labels = ['1 Billion', '2 Billion', '3 Billion', '4 Billion', '5 Billion', '6 Billion']; 

    return (
        <React.Fragment>
            <div className="chart-scale--desktop">
                <div class="label-container">
                    {labels.slice(0).reverse().map((text, index) => <div style={{height: height / labels.length}} className="chart-scale__label" id={index}>{text}</div>)}
                </div>
                <div className="chart-scale--desktop-container" style={{maxWidth: width, height: height}}>
                </div>
            </div>

            <div className="chart-scale--mobile">
                <div className="chart-scale--mobile-container">
                </div>
                {labels.map((text, index) => <div style={{width: 300 / labels.length - 10}} className="chart-scale__label--x-axis" id={index}>{text}</div>)}
            </div>
        </React.Fragment>
    )
};
    
export default ChartScale;
