import React, { Component } from 'react'
import {fetchAllOrders} from "../../redux/actions/trade";
import {connect} from "react-redux";
import {ORDER_DONE, ORDER_LIMIT, ORDER_WAIT} from '../../redux/constants/trade';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const data = [{"id":137,"side":"buy","ord_type":"limit","price":"0.65","avg_price":"0.65","state":"wait","market":"ethbtc","created_at":"2019-10-14T17:26:39+02:00","updated_at":"2019-10-14T17:26:42+02:00","origin_volume":"0.65","remaining_volume":"0.12","executed_volume":"0.53","trades_count":1},{"id":136,"side":"buy","ord_type":"limit","price":"0.646","avg_price":"0.0","state":"wait","market":"ethbtc","created_at":"2019-10-14T17:26:21+02:00","updated_at":"2019-10-14T17:26:21+02:00","origin_volume":"0.644","remaining_volume":"0.644","executed_volume":"0.0","trades_count":0},{"id":135,"side":"buy","ord_type":"limit","price":"0.645","avg_price":"0.0","state":"wait","market":"ethbtc","created_at":"2019-10-14T17:25:46+02:00","updated_at":"2019-10-14T17:25:47+02:00","origin_volume":"0.9","remaining_volume":"0.9","executed_volume":"0.0","trades_count":0},{"id":134,"side":"buy","ord_type":"limit","price":"0.644","avg_price":"0.0","state":"wait","market":"ethbtc","created_at":"2019-10-14T17:25:27+02:00","updated_at":"2019-10-14T17:25:27+02:00","origin_volume":"0.11","remaining_volume":"0.11","executed_volume":"0.0","trades_count":0},{"id":133,"side":"buy","ord_type":"limit","price":"0.643","avg_price":"0.0","state":"wait","market":"ethbtc","created_at":"2019-10-14T17:24:26+02:00","updated_at":"2019-10-14T17:24:27+02:00","origin_volume":"0.22","remaining_volume":"0.22","executed_volume":"0.0","trades_count":0},{"id":132,"side":"buy","ord_type":"limit","price":"0.642","avg_price":"0.0","state":"wait","market":"ethbtc","created_at":"2019-10-14T17:13:57+02:00","updated_at":"2019-10-14T17:13:57+02:00","origin_volume":"0.23","remaining_volume":"0.23","executed_volume":"0.0","trades_count":0},{"id":131,"side":"buy","ord_type":"limit","price":"0.641","avg_price":"0.0","state":"wait","market":"ethbtc","created_at":"2019-10-14T17:01:38+02:00","updated_at":"2019-10-14T17:01:43+02:00","origin_volume":"0.12","remaining_volume":"0.12","executed_volume":"0.0","trades_count":0},{"id":130,"side":"buy","ord_type":"limit","price":"0.64","avg_price":"0.64","state":"wait","market":"ethbtc","created_at":"2019-10-14T08:39:54+02:00","updated_at":"2019-10-14T08:39:54+02:00","origin_volume":"0.256","remaining_volume":"0.136","executed_volume":"0.12","trades_count":1},{"id":125,"side":"buy","ord_type":"limit","price":"0.63","avg_price":"0.63","state":"wait","market":"ethbtc","created_at":"2019-10-14T07:54:48+02:00","updated_at":"2019-10-14T07:55:07+02:00","origin_volume":"0.9","remaining_volume":"0.56","executed_volume":"0.34","trades_count":2},{"id":116,"side":"buy","ord_type":"limit","price":"0.62","avg_price":"0.62","state":"wait","market":"ethbtc","created_at":"2019-10-11T12:54:06+02:00","updated_at":"2019-10-11T12:54:49+02:00","origin_volume":"0.14","remaining_volume":"0.06","executed_volume":"0.08","trades_count":1},{"id":84,"side":"sell","ord_type":"limit","price":"1.0","avg_price":"1.0","state":"wait","market":"ethbtc","created_at":"2019-10-10T15:22:56+02:00","updated_at":"2019-10-11T12:54:44+02:00","origin_volume":"2.0","remaining_volume":"0.418","executed_volume":"1.582","trades_count":6},{"id":112,"side":"buy","ord_type":"limit","price":"0.6","avg_price":"0.0","state":"wait","market":"ethbtc","created_at":"2019-10-11T12:39:49+02:00","updated_at":"2019-10-11T12:39:50+02:00","origin_volume":"0.25","remaining_volume":"0.25","executed_volume":"0.0","trades_count":0},{"id":76,"side":"buy","ord_type":"limit","price":"0.556","avg_price":"0.556","state":"wait","market":"ethbtc","created_at":"2019-10-10T10:04:54+02:00","updated_at":"2019-10-11T12:15:02+02:00","origin_volume":"0.556","remaining_volume":"0.206","executed_volume":"0.35","trades_count":2},{"id":3,"side":"sell","ord_type":"limit","price":"1.2","avg_price":"1.2","state":"wait","market":"ethbtc","created_at":"2019-10-04T13:40:05+02:00","updated_at":"2019-10-10T13:03:26+02:00","origin_volume":"2.9","remaining_volume":"0.19","executed_volume":"2.71","trades_count":3},{"id":58,"side":"buy","ord_type":"limit","price":"0.45","avg_price":"0.0","state":"wait","market":"ethbtc","created_at":"2019-10-07T08:51:00+02:00","updated_at":"2019-10-07T08:51:00+02:00","origin_volume":"0.265","remaining_volume":"0.265","executed_volume":"0.0","trades_count":0},{"id":17,"side":"buy","ord_type":"limit","price":"0.36","avg_price":"0.0","state":"wait","market":"ethbtc","created_at":"2019-10-04T13:42:25+02:00","updated_at":"2019-10-04T13:42:25+02:00","origin_volume":"2.6","remaining_volume":"2.6","executed_volume":"0.0","trades_count":0},{"id":8,"side":"sell","ord_type":"limit","price":"1.75","avg_price":"0.0","state":"wait","market":"ethbtc","created_at":"2019-10-04T13:40:54+02:00","updated_at":"2019-10-04T13:40:54+02:00","origin_volume":"0.89","remaining_volume":"0.89","executed_volume":"0.0","trades_count":0},{"id":7,"side":"sell","ord_type":"limit","price":"1.7","avg_price":"0.0","state":"wait","market":"ethbtc","created_at":"2019-10-04T13:40:50+02:00","updated_at":"2019-10-04T13:40:51+02:00","origin_volume":"0.89","remaining_volume":"0.89","executed_volume":"0.0","trades_count":0},{"id":6,"side":"sell","ord_type":"limit","price":"1.36","avg_price":"0.0","state":"wait","market":"ethbtc","created_at":"2019-10-04T13:40:42+02:00","updated_at":"2019-10-04T13:40:42+02:00","origin_volume":"0.078","remaining_volume":"0.078","executed_volume":"0.0","trades_count":0},{"id":5,"side":"sell","ord_type":"limit","price":"1.65","avg_price":"0.0","state":"wait","market":"ethbtc","created_at":"2019-10-04T13:40:19+02:00","updated_at":"2019-10-04T13:40:19+02:00","origin_volume":"0.8","remaining_volume":"0.8","executed_volume":"0.0","trades_count":0},{"id":4,"side":"sell","ord_type":"limit","price":"1.25","avg_price":"0.0","state":"wait","market":"ethbtc","created_at":"2019-10-04T13:40:11+02:00","updated_at":"2019-10-04T13:40:11+02:00","origin_volume":"0.5","remaining_volume":"0.5","executed_volume":"0.0","trades_count":0}]

const columns = [{
    dataField: 'created_at',
    text: 'Date'
}, {
    dataField: 'market',
    text: 'Pair'
}, {
    dataField: 'ord_type',
    text: 'Type'
}, {
    dataField: 'side',
    text: 'Side'
},{
    dataField: 'price',
    text: 'Price'
},{
    dataField: 'remaining_volume',
    text: 'Amount'
},{
    dataField: 'executed_volume',
    text: 'Filled'
},{
    dataField: 'origin_volume',
    text: 'Total'
}

];

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total custom-pagination" >
    Showing { from } to { to } of { size } Results
  </span>
);

class connectedOrderHistory extends Component{

    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    componentWillMount() {
        this.props.fetchAllOrders({ market: this.props.market, limit: ORDER_LIMIT, state: ORDER_DONE })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({orders: nextProps.allOrders});
    }



    render() {
        const options = {
            paginationSize: 5,
            pageStartIndex: 0,
            // alwaysShowAllBtns: true, // Always show next and previous button
            // withFirstAndLast: false, // Hide the going to First and Last page button
            // hideSizePerPage: true, // Hide the sizePerPage dropdown always
            // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
            firstPageText: 'First',
            prePageText: 'Back',
            nextPageText: 'Next',
            lastPageText: 'Last',
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
            showTotal: true,
            paginationTotalRenderer: customTotal,
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: this.state.orders.length
            }]
        };
        return (
            <React.Fragment>
                <BootstrapTable
                    keyField="id"
                    data={ data }
                    columns={ columns }
                    pagination={ paginationFactory(options) }
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        allOrders: state.trade.allOrders,
        market: state.trade.market
    }
};

function mapDispatchToProps(dispatch){
    return {
        fetchAllOrders: (payload) => dispatch(fetchAllOrders(payload))
    }
}

const OrderHistory = connect(mapStateToProps, mapDispatchToProps)(connectedOrderHistory);

export default OrderHistory;