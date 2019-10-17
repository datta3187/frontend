import React, { Component, Fragment }  from 'react';
import {Grid, Table} from "semantic-ui-react";

class HistoryTable extends Component {
    render() {
        const { history } = this.props;

        return (
            <Fragment>
                <Grid container>
                    <Grid item xs={11}>
                        <h1>
                            History
                        </h1>
                    </Grid>
                </Grid>
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine>Date</Table.HeaderCell>
                            <Table.HeaderCell numeric>Status</Table.HeaderCell>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                            <Table.HeaderCell>Balance</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            history.map((data, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell>{data.created_at}</Table.Cell>
                                    <Table.Cell>{data.state}</Table.Cell>
                                    <Table.Cell>{data.amount}</Table.Cell>
                                    <Table.Cell>TODO</Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
                { !history.length && <h3 align="center">Empty history</h3> }
            </Fragment>
        );
    }
}

export default HistoryTable;