import React, { Component } from 'react'
import config from "../../config";
import "./css/exchange.scss";
import Websocket from 'react-websocket';
import {Tab, List} from "semantic-ui-react";
import * as Api from "../../api/remoteApi";
import MarketTicker from './MarketTicker'
import { connect } from 'react-redux';
import {globalTickers} from "../../redux/actions/socketAction";


const MarketInfo= (props) => {
    return(
        <div>
            <Tab.Pane>
                <MarketTicker quote={props.market} />
            </Tab.Pane>
        </div>
    )
}

class ConnectMarketList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panes: [],
            tickers: {}
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
            this.props.addGlobalTickers(this.state.tickers);
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

// const mapStateToProps = state => {
//     return { trades: state.tradeState.trades }
// }

function mapDispatchToProps(dispatch){
    return {
        addGlobalTickers: (payload) => dispatch(globalTickers(payload))
    }
}

const MarketList= connect(null, mapDispatchToProps)(ConnectMarketList)
export default MarketList;
