import React, { Component } from 'react'
import { Column, Table } from 'react-virtualized'
import config from "../../config";
import { addMyTrade } from '../../redux/actions/socketAction'

import 'react-virtualized/styles.css'
import "./css/exchange.scss";
import Websocket from 'react-websocket';
import * as formatter from '../../utils/Formatter'

import { connect } from 'react-redux';


class ConnectMyTrade extends Component {
    constructor(props){
        super(props);
        this.handleData = this.handleData.bind(this);
    }


    handleData(data){
        let result = JSON.parse(data);
        debugger

        console.log('Private trades => :', result['trade']);

        // To do later format data coming from socket

        // if(typeof result['trade'] !== 'undefined') {
        //     let formatted_data = this.changeFormat(result['trade'])
        //     this.props.addTrade(formatted_data)
        // }


    }

    changeFormat(data){
        let records = []
        data.reverse().map((record) =>{
            records.push({price: formatter.toFixed(record.price), volume: formatter.toFixed(record.amount), time: formatter.tradeTime( record.date) })
        });
        return records
    }

    path() {
        return config.webSocketUrl+ 'trade'
    }

    render(){
        return (
            <div>
                {/* <Websocket url={this.path()}
                           onMessage={this.handleData}/> */}
                {
                    this.props.trades.length === 0 ?
                        <div> No trade</div>
                        :
                        <Table
                            width={310}
                            height={350}
                            disableHeader={true}
                            rowHeight={15}
                            rowCount={this.props.trades.length}
                            rowGetter={({ index }) => this.props.trades[index]}
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
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        trades: state.tradeState.myTrades,
        market: state.trade.market }
}


// function mapDispatchToProps(dispatch){
//     return {
//         addTrade: (payload) => dispatch(addMyTrade(payload))
//     }
// }

const MyTrade = connect(mapStateToProps)(ConnectMyTrade)

export default MyTrade;
