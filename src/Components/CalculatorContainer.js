import React, { Component } from 'react'
import DisplayContent from './DisplayContent'
import Operators from './Operators'

const mathButtons = ['+', '-', '*', '/', '=']

const buildOprands = (prevState, value, type) => {
    let result;
    let displayContent;
    if (prevState.operator === '=') {
        displayContent = value.toString();
        result = {
            value: parseInt(displayContent),
            operator: null
        }

    } else {
        displayContent = prevState.value !== 0 ? prevState.value.toString() + value.toString() : value.toString()
        result = {
            value: parseInt(displayContent)
        }
    }

    if (type === 1) {
        result.firstOprand = parseInt(displayContent)
    } else if (type === 2) {
        result.secondOprand = parseInt(displayContent)
    }

    return result
}

const calculateResult = (firstOprand, secondOprand, operation) => {
    let result = 0;
    switch (operation) {
        case "+":
            result = firstOprand + secondOprand
            break;
        case "-":
            result = firstOprand - secondOprand
            break;
        case "*":
            result = firstOprand * secondOprand
            break;
        case "/":
            result = firstOprand / secondOprand
            break;
        default:
            result = firstOprand + secondOprand
            break;
    }

    return result;

}

class CalculatorContainer extends Component {
    constructor() {
        super()
        this.state = {
            value: 0,
            firstOprand: null,
            secondOprand: null,
            operator: null
        }
        this.Calculate = this.Calculate.bind(this)
    }


    Calculate(value) {
        if (mathButtons.includes(value)) {
            if (value === '=') {
                this.setState(prevState => {
                    if (prevState.firstOprand !== null && prevState.secondOprand !== null) {
                        return {
                            value: calculateResult(prevState.firstOprand, prevState.secondOprand, value),
                            operator: value
                        }
                    }
                })
            } else {
                console.log(value);
                this.setState(prevState => {
                    if (prevState.operator === null) {
                        console.log(prevState);
                        return {
                            firstOprand: prevState.firstOprand === null ? 0 : prevState.firstOprand,
                            operator: value,
                            value: 0
                        }
                    } else if (prevState.operator !== null) {
                        console.log(prevState);
                        return {
                            secondOprand: prevState.secondOprand === null ? 0 : prevState.secondOprand,
                            operator: value
                        }
                    }
                })
            }
        } else if (typeof (value) === 'number') {
            this.setState(prevState => {
                if (prevState.operator === null) {
                    return buildOprands(prevState, value, 1)
                } else if (prevState.operator !== null) {
                    return buildOprands(prevState, value, 2)
                }
            })
        }
    }

    render() {
        return (
            <div className="container">
                <DisplayContent Value={this.state.value} />
                <Operators Calculate={this.Calculate} />
            </div>
        )
    }
}

export default CalculatorContainer
