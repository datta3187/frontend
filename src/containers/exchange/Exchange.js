import React, { Component } from 'react'
import { Tab, Checkbox } from 'semantic-ui-react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Limit from './Limit'
import Market from './Market'
import Ticker from './Ticker'

import './exchange.scss'


const orderTabs = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>helo</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Hi</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Bye</Tab.Pane> },
]

const limitMarket = [
    { menuItem: 'Limit', render: () => <Tab.Pane><Limit /></Tab.Pane> },
    { menuItem: 'Market', render: () => <Tab.Pane><Market /></Tab.Pane> },
]

class Exchange extends Component {

    constructor(props) {
        super(props);
        this.state = {
            market: ''
        }
    }

    componentWillMount() {
        this.setState({market: this.props.match.params.market})
    }

    render() {
        return (
            <div style={{ 'background': '#dfdfdf' }}>
                <Header abc="exchangeHdr"/>
                <Ticker market={this.state.market} />
                <div className="exchangeBlock">
                    <div className="sidebar s-left">
                        <div className="halfHeight">
                            <div className="orderBlock">
                                <Tab panes={orderTabs} />
                            </div>
                        </div>
                    </div>
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
                    <div className="sidebar s-right">sdfsdf</div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Exchange
