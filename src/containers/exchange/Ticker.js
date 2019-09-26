import React, { Component } from 'react'
import {Checkbox} from "semantic-ui-react";
import * as Api from "../../api/remoteApi";
import "./exchange.scss";

import * as formatter from './Formatter'

class Ticker extends Component{

    constructor(props) {
        super(props);
        this.state = {
            ticker:{
                last: "0.0",
                low: "0.0",
                high: "0.0",
                volume: "0.0",
                open: "0.0",
                price_change_percent: '0.00%'
            }
        }
    }

    market(){
        let mkt = this.props.market
        return mkt.toLowerCase().split('_').join('')
    }

    componentWillMount() {
        let api_url = 'public/markets/'+ this.market() +'/tickers'
        Api.peatioApi(api_url, "GET")
            .then(res => {
                this.setState(prevState => {
                    let ticker = Object.assign({}, prevState.ticker);
                    Object.keys(ticker).map((key) =>{
                      ticker[key] = res.ticker[key]
                    })
                    return { ticker };
                });
                console.log("New Ticker ==> ", this.state.ticker)
            })
            .catch(error =>{
                console.log("Ticker's error ==>", error)
            })
    }

    marketName(market) {
        let mkt = market.split('_')
        return (
            <div>
                <span>{mkt[0]}</span>/<span>{mkt[1]}</span>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="tradeBar">
                    <ul className="rowVolume">
                        <li>{this.marketName(this.props.market)}</li>
                        <li><h3>LAST PRICE</h3><p>{this.state.ticker.last}</p></li>
                        <li><h3>24H CHANGE</h3><p className={formatter.ticker_color_class(this.state.ticker.last, this.state.ticker.open)}>{formatter.priceChange(this.state.ticker.last, this.state.ticker.open, 8)} {this.state.ticker.price_change_percent}</p></li>
                        <li><h3>24H HIGHT</h3><p>{this.state.ticker.high}</p></li>
                        <li><h3>24H LOW</h3><p>{this.state.ticker.low}</p></li>
                        <li><h3>24H VOLUME</h3><p>{this.state.ticker.volume}</p></li>
                    </ul>
                    <Checkbox toggle />
                </div>
            </div>
        )
    }
}

export default Ticker;
