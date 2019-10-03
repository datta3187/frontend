import React, { Component } from 'react'
import { Column, Table } from 'react-virtualized'
import { addMarketTrade } from '../../redux/actions/socketAction'
import 'react-virtualized/styles.css'
import "./css/exchange.scss";
import { connect } from 'react-redux';


class ConnectMarketTrade extends Component {
    constructor(props){
        super(props);

        this.handleData = this.handleData.bind(this);
    }


    handleData(data){
        let result = JSON.parse(data);
        let stream_type = this.props.market + '.trades';
        if(typeof result[stream_type] !== 'undefined') {
            let formatted_data = this.changeFormat(result[stream_type]['trades'])
            this.props.addTrade(formatted_data)
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

    render(){
        return (
            <div>
                <Websocket url={this.path()}
                           onMessage={this.handleData}/>
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { trades: state.tradeState.trades }
}

function mapDispatchToProps(dispatch){
    return {
        addTrade: (payload) => dispatch(addMarketTrade(payload))
    }
}

const MarketTrade = connect(mapStateToProps, mapDispatchToProps)(ConnectMarketTrade)

export default MarketTrade;
