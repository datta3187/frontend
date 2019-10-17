import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import bitcoin from "../images/icon-bitcoin.png";

class SampleTable extends Component {
    constructor(props){
        super(props);
        this.state = {
             buySellCoin:''
        }
    }

    buySellTrade = (data) =>{
        if(data.price_change_percent < 0){
            this.state.buySellCoin = 'Sell';
        } else{
            this.state.buySellCoin = 'Buy';
        }
    }
    render() {
        return (
            <div>
                <Table basic>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Change</Table.HeaderCell>
                        <Table.HeaderCell>Trade</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {this.props.curr.map((data,index)=>  (
                      this.buySellTrade(data), 
                    <Table.Row>
                        <Table.Cell>{index+1}</Table.Cell>
                        <Table.Cell><img src={bitcoin}/>{data.base_unit.toUpperCase()}</Table.Cell>
                        <Table.Cell>{data.low}</Table.Cell>
                        <Table.Cell>{data.price_change_percent}</Table.Cell>
                        <Table.Cell> {this.state.buySellCoin}</Table.Cell>
                    </Table.Row>
                    ))}
                  
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default SampleTable