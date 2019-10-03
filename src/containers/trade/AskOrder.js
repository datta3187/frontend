import React, { Component } from 'react'
import { Column, Table } from 'react-virtualized'
import config from "../../config";

import 'react-virtualized/styles.css'
import "./css/exchange.scss";
import Websocket from 'react-websocket';
import * as formatter from './Formatter'

class AskOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asks: []
        }
    }

    handleData(data){
        let result = JSON.parse(data);
        let stream_type = this.props.market + '.update';
        if(typeof result[stream_type] !== 'undefined'){
            let formatted_data = this.changeFormat(result[stream_type]['asks'])
            this.setState({asks: formatted_data})
        }
    }

    changeFormat(data){
        let records = []
        data.reverse().map((record) =>{
            records.push({price: formatter.toFixed(record[0]), volume: formatter.toFixed(record[1]), total: formatter.total(record[0], record[1]) })
        });
        return records
    }

    path() {
        return config.webSocketUrl+ this.props.market + '.update'
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
