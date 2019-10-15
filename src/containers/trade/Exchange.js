import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Limit from './Limit'
import Market from './Market'
import Ticker from './Ticker'
import OrderBook from './OrderBook'
import MarketList from './MarketList'
import Trade from './Trade'
import MyOrder from './MyOrder'
import OrderHistory from './OrderHistory'
import 'bootstrap/dist/css/bootstrap.min.css';

// import PeatioSocket from '../../components/PeatioSocket'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


import './css/exchange.scss'
import {assignMarket} from "../../redux/actions/trade";
import {connect} from "react-redux";

// const mySocket = new PeatioSocket();


const limitMarket = [
    { menuItem: 'Limit', render: () => <Tab.Pane><Limit /></Tab.Pane> },
    { menuItem: 'Market', render: () => <Tab.Pane><Market /></Tab.Pane> }
]

class connectedExchange extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let mkt =this.props.match.params.market.toLowerCase().split('_').join('')
        this.props.assignMarket(mkt);

    }

    render() {
        return (
            <div style={{ 'background': '#dfdfdf' }}>
                <Header abc="exchangeHdr" activePath='trade' />
                <Ticker  />
                <div className="exchangeBlock">
                    <OrderBook />

                    <div className="exchangeMiddleBlock">

                        <div className="tradeMap">
                            <div className="tradeMapHeader">
                                <h2>Trade Chart</h2>
                            </div>
                            <div className="tradeMapBody">
                                <p>Map Body</p>
                            </div>
                        </div>

                        <div className="limitMarketBlock">
                            <Tab panes={limitMarket} />
                        </div>

                    </div>
                    <div className="sidebar s-right">
                        <div>
                            <MarketList />
                        </div>
                        <div>
                            <Trade />
                        </div>
                    </div>
                </div>
                <div>
                    <MyOrder />
                </div>
                <div>
                    <OrderHistory />
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { market: state.trade.market }
}

function mapDispatchToProps(dispatch){
    return {
        assignMarket: (payload) => dispatch(assignMarket(payload))
    }
}

const Exchange = connect(mapStateToProps, mapDispatchToProps)(connectedExchange)

export default Exchange
