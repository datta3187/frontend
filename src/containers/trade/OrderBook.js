import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import  AskOrder from './AskOrder'
import  BidOrder from './BidOrder'

import "./css/exchange.scss";
import {connect} from "react-redux";

class connectedOrderBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panes: []
        }
    }

    componentWillMount() {
        this.setState({
            panes: [
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
                            <BidOrder height={630}  />
                        </Tab.Pane>
                },
                { menuItem: 'Tab 3', render: () =>
                        <Tab.Pane>
                            <AskOrder height={630}  />
                        </Tab.Pane>
                },
            ]
        })
    }

    render(){
        return (
            <div className="sidebar s-left">
                <div className="halfHeight">
                    <div className="orderBlock">
                        <Tab panes={this.state.panes} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { market: state.trade.market }
}

const OrderBook = connect(mapStateToProps)(connectedOrderBook)

export default OrderBook;
