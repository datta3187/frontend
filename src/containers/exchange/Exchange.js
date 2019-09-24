import React, { Component } from 'react'
import { Container, Form, Input, Tab, Checkbox, Icon, Button, Dropdown } from 'semantic-ui-react'
import Footer from '../../components/Footer'
import LoggedInHeader from '../../components/LoggedInHeader'
import Limit from './Limit'
import Market from './Market'

import './exchnage.scss'


const orderTabs = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>No Sell History</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>No Sell History</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>No Sell History</Tab.Pane> },
]

const limitMarket = [
    { menuItem: 'Limit', render: () => <Tab.Pane><Limit /></Tab.Pane> },
    { menuItem: 'Market', render: () => <Tab.Pane><Market /></Tab.Pane> },
]

class Exchange extends Component {

    render() {
        return (
            <div style={{ 'background': '#dfdfdf' }}>
                <LoggedInHeader abc="exchangeHdr" />
                <div className="tradeBar">
                    <ul className="rowVolume">
                        <li>BTC/BCH</li>
                        <li><h3>LAST PRICE</h3><p>0.0679</p></li>
                        <li><h3>24H CHANGE</h3><p className={`green`}>0.00006%  +0.80%</p></li>
                        <li><h3>24H HIGHT</h3><p>1</p></li>
                        <li><h3>24H LOW</h3><p>1</p></li>
                        <li><h3>24H VOLUME</h3><p>0.0</p></li>

                    </ul>
                    <Checkbox toggle />
                </div>
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
