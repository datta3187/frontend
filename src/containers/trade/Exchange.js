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
// import PeatioSocket from '../../components/PeatioSocket'

import './css/exchange.scss'

// const mySocket = new PeatioSocket();


const limitMarket = [
    { menuItem: 'Limit', render: () => <Tab.Pane><Limit /></Tab.Pane> },
    { menuItem: 'Market', render: () => <Tab.Pane><Market /></Tab.Pane> }
]

class Exchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            market: 'ethbtc'
        }
    }

    componentWillMount() {
        let mkt =this.props.match.params.market.toLowerCase().split('_').join('')
        // mySocket.execute(mkt);
        this.setState({market: mkt})
    }

    render() {
        return (
            <div style={{ 'background': '#dfdfdf' }}>
                <Header abc="exchangeHdr"/>
                <Ticker market={this.state.market} />
                <div className="exchangeBlock">
                    <OrderBook market={this.state.market} />

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
                            <Trade market={this.state.market} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Exchange
