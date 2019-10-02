import React, { Component } from 'react'
import "./css/exchange.scss";
import { Tab } from 'semantic-ui-react'
import MarketTrade from './MarketTrade'

class Trade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panes: []
        }
    }

    componentWillMount() {
        this.setState({
            panes: [
                { menuItem: 'All', render: () =>
                    <div>
                        <Tab.Pane>
                            <MarketTrade market={this.props.market} />
                        </Tab.Pane>
                    </div>
                },
                { menuItem: 'My Trades', render: () =>
                    <div>
                        <Tab.Pane>
                            My Trade listing
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

export default Trade;
