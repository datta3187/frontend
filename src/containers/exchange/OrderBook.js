import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import  AskOrder from './AskOrder'
import  BidOrder from './BidOrder'



import "./exchange.scss";



class OrderBook extends Component {
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
                                <AskOrder height={315} market={this.props.market} />
                            </Tab.Pane>
                            <div>
                                <center>
                                    <span> 5.626454</span>
                                    <span> $5.626454</span>
                                </center>
                            </div>
                            <Tab.Pane>
                                <BidOrder height={315} market={this.props.market} />
                            </Tab.Pane>
                        </div>
                },
                { menuItem: 'Tab 2', render: () =>
                        <Tab.Pane>
                            <AskOrder height={630} market={this.props.market} />
                        </Tab.Pane>
                },
                { menuItem: 'Tab 3', render: () =>
                        <Tab.Pane>
                            <BidOrder height={630}  market={this.props.market} />
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

export default OrderBook;
