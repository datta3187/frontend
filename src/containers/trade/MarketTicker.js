import React, { Component } from 'react'
import "./css/exchange.scss";

class MarketTicker extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Hello {this.props.quote} here
            </div>
        )
    }
}

export default MarketTicker;
