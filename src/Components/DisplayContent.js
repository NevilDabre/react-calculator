import React, {Component} from 'react'

class DisplayContent extends Component{

    render(){
        return(
            <input type="number" className="displayOutput" placeholder="0" value={this.props.Value} />
        )
    }

}

export default DisplayContent