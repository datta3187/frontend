import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class Buttonn extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttons : ''
        }
    }
    render() {
        return (
            <div>
                <Button  onClick={this.props.onClick}  className={this.props.btnDefault}>{this.props.buttons}</Button>
            </div>
        )
    }
}
export default Buttonn;