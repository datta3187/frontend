import React, { Component } from 'react'
import {Checkbox} from "semantic-ui-react";
import "./css/exchange.scss";
import * as formatter from '../../utils/Formatter'
import Websocket from 'react-websocket';
import config from "../../config";
import {connect} from "react-redux";

class connectedTicker extends Component{

    constructor(props) {
        super(props);
        this.state = {
            ticker: {
                last: "0.00",
                open: "0.00",
                low: "0.00",
                high: "0.00",
                name: "ETH/BTC",
                price_change_percent: "0.00%",
                volume: "0.0"
            }
        }
    }

    marketName(market) {
        let mkt = market.split('/')
        return (
            <div>
                <span>{mkt[0]}</span>/<span>{mkt[1]}</span>
            </div>
        )
    }

    getClassName() {
        return formatter.ticker_color_class(this.state.ticker.last, this.state.ticker.open)
    }

    h24Change = () =>{
        return formatter.h24Change(this.state.ticker.last, this.state.ticker.open) + ' ' + this.state.ticker.price_change_percent
    }

    path() {
        return config.webSocketUrl+ 'global.tickers'
    }

    handleData(data) {
        let result = JSON.parse(data);
         if(typeof result['global.tickers'] !== 'undefined'){
             this.setState({ticker: result["global.tickers"][this.props.market] })
         }
    }

    render() {
        return (
            <div>
                <Websocket url={this.path()}
                           onMessage={this.handleData.bind(this)}/>
                <div className="tradeBar">
                    <ul className="rowVolume">
                        <li>{this.marketName(this.state.ticker.name)}</li>
                        <li><h3>LAST PRICE</h3><p>{formatter.toFixed(this.state.ticker.last)}</p></li>
                        <li><h3>24H CHANGE</h3><p className={this.getClassName()}>{this.h24Change()}</p></li>
                        <li><h3>24H HIGHT</h3><p>{formatter.toFixed(this.state.ticker.high)}</p></li>
                        <li><h3>24H LOW</h3><p>{formatter.toFixed(this.state.ticker.low)}</p></li>
                        <li><h3>24H VOLUME</h3><p>{formatter.toFixed(this.state.ticker.volume)}</p></li>
                    </ul>
                    <Checkbox toggle />
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return { market: state.trade.market }
}

const Ticker = connect(mapStateToProps)(connectedTicker)

export default Ticker;
