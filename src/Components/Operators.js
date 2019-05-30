import React, { Component } from 'react';
import CalculatorButton from './CalculatorButton';

class Operators extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        const numericButtons = [1,2,3,4,5,6,7,8,9,0]
        const mathButtons= ['+', '-', '*', '/', '='] 
        let numericButtonsComponents = numericButtons.map((numericButton, index)=> <CalculatorButton key={index} Calculate={this.props.Calculate} value={numericButton} />)
        let mathButtonsComponents = mathButtons.map((mathButton, index)=> <CalculatorButton key={index} Calculate={this.props.Calculate} value={mathButton} />)
        return(
            <div className="buttons-holder">
            <div className="numeric-buttons-holder">
            {numericButtonsComponents}
            </div>
            <div className="math-buttons-holder">
            {mathButtonsComponents}
            </div>
            </div>
        )
    }

}

export default Operators
