import React, { Component } from 'react'
import { Column, Table } from 'react-virtualized'
import config from "../../config";

import 'react-virtualized/styles.css'
import "./exchange.scss";
import Websocket from 'react-websocket';
import * as formatter from './Formatter'


// const path = 'wss://demo.openware.com/api/v2/ranger/public/?stream=fthusd.update'

class AskOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asks: []
        }
    }

    handleData(e){
        let data = JSON.parse(e);
        let stream_type = this.props.market + '.update';
        if(typeof data[stream_type] !== 'undefined'){
            let formatted_data = this.changeFormat(data[stream_type]['asks'])
            this.setState({asks: formatted_data})
        }
        console.log("path => ", this.path())
        console.log("Ask data ==>", this.state.asks)
    }

    changeFormat(data){
        let records = []
        data.map((record) =>{
            records.push({price: formatter.toFixed(record[0]), volume: formatter.toFixed(record[1]), total: formatter.total(record[0], record[1]) })
        });
        return records
    }

    market(){
        let mkt = this.props.market
        return mkt.toLowerCase().split('_').join('')
    }

    path() {
       return config.webSocketUrl+ this.market() + '.update'
    }


    render(){
        return (
            <div>
                <Websocket url={this.path()}
                           onMessage={this.handleData.bind(this)}/>
                <Table
                    width={310}
                    height={this.props.height}
                    headerHeight={15}
                    rowHeight={15}
                    rowCount={this.state.asks.length}
                    rowGetter={({ index }) => this.state.asks[index]}
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
                        label= "Total"
                        width={100}
                        dataKey='total'
                    />
                </Table>
            </div>
        )
    }
}

export default AskOrder;
