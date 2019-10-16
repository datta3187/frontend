import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
class Textboxx extends Component {
    constructor(props){
        super(props);
        this.state = {
            textbox : '',
            placeholder:''
        }
    }

    textbox=(event)=>{
        this.setState({textbox: event.target.value});
    }
    render() {
        return (
            <div> 
            <Input placeholder= {this.props.placeholder} />
            </div>
        )
    }
}

export default Textboxx;