import React, { Component } from 'react'
import config from "../../config";
import "./css/exchange.scss";
import Websocket from 'react-websocket';
import {Tab, List} from "semantic-ui-react";
import * as Api from "../../api/remoteApi";
import MarketTicker from './MarketTicker'


const MarketInfo= (props) => {
    return(
        <div>
            <Tab.Pane>
                <MarketTicker quote={props.market} />
            </Tab.Pane>
        </div>
    )
}

class MarketList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panes: [],
            tickers: []
        }
    }

    componentWillMount() {
        Api.remoteApi('public/markets', 'GET', undefined, 'peatio')
            .then(res => {
                this.setState({ panes: this.setMarketTabs(res) } )
            })
            .catch(error => {

            })
    }

    setMarketTabs(data) {
        let result = [];
        const quote_units = [...new Set(data.map(x => x.quote_unit))];
        quote_units.sort().map((market) => {
            result.push({ menuItem: market.toUpperCase(), render: () => <MarketInfo market={market} /> })
        });
        return result;
    }

    path() {
        return config.webSocketUrl+ 'global.tickers'
    }

    handleData(data) {
        let result = JSON.parse(data);
        if(typeof result['global.tickers'] !== 'undefined'){
            this.setState({tickers: result["global.tickers"] })
        }
    }

    render(){
        return (
            <div>
                <Websocket url={this.path()}
                           onMessage={this.handleData.bind(this)} />

               <Tab panes={this.state.panes} />
            </div>
        )
    }
}

export default MarketList;
