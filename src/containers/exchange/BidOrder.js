import React, { Component } from 'react'
import { Column, Table } from 'react-virtualized'


import 'react-virtualized/styles.css'
import "./exchange.scss";

const list = [
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 4.002, volume: 0.65543, total: 4.21116 },
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 4.002, volume: 0.65543, total: 4.21116 },
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 4.002, volume: 0.65543, total: 4.21116 },
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 4.002, volume: 0.65543, total: 4.21116 },
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 4.002, volume: 0.65543, total: 4.21116 },
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 4.002, volume: 0.65543, total: 4.21116 },
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 4.002, volume: 0.65543, total: 4.21116 },
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 3.002, volume: 2.365654, total: 7.54546 },
    { price: 4.002, volume: 0.65543, total: 4.21116 },
    { price: 3.002, volume: 2.365654, total: 7.54546 }


];

class BidOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <Table
                    width={300}
                    height={this.props.height}
                    headerHeight={15}
                    rowHeight={15}
                    rowCount={list.length}
                    rowGetter={({ index }) => list[index]}
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

export default BidOrder;
