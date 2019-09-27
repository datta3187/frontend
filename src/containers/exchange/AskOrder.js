import React, { Component } from 'react'
import { Column, Table } from 'react-virtualized'


import 'react-virtualized/styles.css'
import "./exchange.scss";

const list = [
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },

    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },
    { price: 4.0002, volume: 3.03265, total: 12.00006 },


];

class AskOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <Table
                    width={310}
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

export default AskOrder;
