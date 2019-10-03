import React, { Component } from 'react'
import config from "../../config";
import "./css/exchange.scss";
import Websocket from 'react-websocket';
import * as formatter from './Formatter'
import {Tab} from "semantic-ui-react";

class MarketList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asks: []
        }
    }

    path(){
        return ''
    }

    render(){
        return (
            <div>
                {/*<Websocket url={this.path()}*/}
                           {/*onMessage={this.handleData.bind(this)}/>*/}
                Market Listing coming soon..

            </div>
        )
    }
}

export default MarketList;
