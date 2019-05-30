import React, { Component } from 'react';
import CalculatorContainer from './CalculatorContainer';

class Calculator extends Component{

render(){
    return(
        <div className="content">
            <h1 className="title">Calculator</h1>
            <CalculatorContainer />
        </div>
    )
}

}

export default Calculator