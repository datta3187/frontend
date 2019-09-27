import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import  AskOrder from './AskOrder'
import  BidOrder from './BidOrder'

import "./exchange.scss";
const orderTabs = [
    { menuItem: 'Tab 1', render: () =>
        <div>
            <Tab.Pane>
                <AskOrder height={315} />
            </Tab.Pane>
            <div>
                <center>
                    <span> 5.626454</span>
                    <span> $5.626454</span>
                </center>
            </div>
            <Tab.Pane>
                <BidOrder height={315} />
            </Tab.Pane>
        </div>
    },
    { menuItem: 'Tab 2', render: () =>
        <Tab.Pane>
            <AskOrder height={630} />
        </Tab.Pane>
    },
    { menuItem: 'Tab 3', render: () =>
        <Tab.Pane>
            <BidOrder height={630} />
        </Tab.Pane>
    },
]

class OrderBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticker:{
                last: "0.0",
                low: "0.0",
                high: "0.0",
                volume: "0.0",
                open: "0.0",
                price_change_percent: '0.00%'
            }
        }
    }

    render(){
        return (
            <div className="sidebar s-left">
                <div className="halfHeight">
                    <div className="orderBlock">
                        <Tab panes={orderTabs} />
                    </div>
                </div>
            </div>
        )
    }


}

export default OrderBook;
