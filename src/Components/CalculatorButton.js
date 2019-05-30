import React, { Component } from 'react';

class CalculatorButton extends Component{
    render(){
        return(
            <button className="calculator-button" type="button" value={this.props.value} onClick={()=> this.props.Calculate(this.props.value)}>{this.props.value}</button>
        )
    }
}

export default CalculatorButton