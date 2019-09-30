import React, { Component } from 'react'
import { Column, Table } from 'react-virtualized'
import config from "../../config";
import * as Api from "../api/remoteApi";

import 'react-virtualized/styles.css'
import "./css/exchange.scss";
import Websocket from 'react-websocket';
import * as formatter from './Formatter'

class MarketTrade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trades:[]
        }
    }

    handleData(data){
        let result = JSON.parse(data);
        let stream_type = this.props.market + '.trades';
        if(typeof result[stream_type] !== 'undefined'){
            let formatted_data = this.changeFormat(result[stream_type]['trades'])
            this.setState({trades: formatted_data})
        }
    }

    changeFormat(data){
        let records = []
        data.reverse().map((record) =>{
            records.push({price: formatter.toFixed(record.price), volume: formatter.toFixed(record.amount), time: formatter.tradeTime( record.date) })
        });
        return records
    }

    path() {
        return config.webSocketUrl+ this.props.market + '.trades'
    }

    componentWillMount() {
        let api_url = '';
        Api.remoteApi(api_url, 'get', {})
            .then(res => {
                debugger
                console.log('hello')
            })
            .catch(error => {
                if (error.response) {
                    console.error(error.response.data.errors[0]);
                } else {
                    console.error("Trades List Error - " + error);
                }
            });
    }


    render(){
        return (
            <div>
                <Websocket url={this.path()}
                           onMessage={this.handleData.bind(this)}/>
                <Table
                    width={310}
                    height={350}
                    disableHeader={true}
                    rowHeight={15}
                    rowCount={this.state.trades.length}
                    rowGetter={({ index }) => this.state.trades[index]}
                    isScrolling={false}
                >
                    <Column
                        dataKey='price'
                        label= 'Price'
                        width={100}
                    />
                    <Column
                        label= 'Volume'
                        width={100}
                        dataKey='volume'
                    />
                    <Column
                        label= "Time"
                        width={100}
                        dataKey='time'
                    />
                </Table>
            </div>
        )
    }
}

export default MarketTrade;
