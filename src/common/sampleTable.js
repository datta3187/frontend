import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import bitcoin from "../images/icon-bitcoin.png";
import bitcoincash from "../images/icon-bitcoincash.png";
import ethereum from "../images/icon-ethereum.png";



class SampleTable extends Component {
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
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell><img src={bitcoin}/>Bitcoin BTC</Table.Cell>
                        <Table.Cell>$8369.12</Table.Cell>
                        <Table.Cell>10096.296296296307%</Table.Cell>
                        <Table.Cell>BUY</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell><img src={bitcoincash}/>Ethereum ETH</Table.Cell>
                        <Table.Cell>$180.15</Table.Cell>
                        <Table.Cell>4615.968586387443%</Table.Cell>
                        <Table.Cell>BUY</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell><img src={ethereum}/>Bitcoin Cash BCH</Table.Cell>
                        <Table.Cell>$224.24</Table.Cell>
                        <Table.Cell>11112%</Table.Cell>
                        <Table.Cell>BUY</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default SampleTable