import React, { Component } from 'react'
import "./css/exchange.scss";
import { Tab } from 'semantic-ui-react'
import MarketTrade from './MarketTrade'
import MyTrade from './MyTrade'
import {connect} from "react-redux";

class connectedTrade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panes: []
        }
    }

    componentWillMount() {
        this.setState({
            panes: [
                { menuItem: 'Market', render: () =>
                    <div>
                        <Tab.Pane>
                            <MarketTrade />
                        </Tab.Pane>
                    </div>
                },
                { menuItem: 'Yours', render: () =>
                    <div>
                        <Tab.Pane>
                            <MyTrade  />
                        </Tab.Pane>
                    </div>
                }
            ]
        })
    }

    render(){
        return (
            <div>
                <Tab panes={this.state.panes} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { market: state.trade.market }
}

const Trade = connect(mapStateToProps)(connectedTrade)

export default Trade;
