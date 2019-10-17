import React, { Component } from 'react'

class HeadDesc extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h2>{this.props.heading}</h2>
                <p>{this.props.subheading}</p>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default HeadDesc;