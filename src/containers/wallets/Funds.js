import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import Deposit from "../wallets/Deposit";
import Withdraw from "../wallets/Withdraw";



class Funds extends Component {
    constructor(props){
        super(props)
        this.state = {
            fund_spanes: []
        }
    }

    componentWillMount() {
        console.log("PROPS", this.props.funds_arr)
        const fund_spanes_arr = [
            { menuItem: 'Deposit', render: () => <Tab.Pane><Deposit deposit_arr={this.props.funds_arr}/></Tab.Pane> },
            { menuItem: 'Withdraw', render: () => <Tab.Pane><Withdraw withdraw_arr={ this.props.funds_arr}/></Tab.Pane> }
        ]
        this.setState({fund_spanes: fund_spanes_arr})
    }

    render() {

        return (
            <div>
                {/*<Tab panes={fund_spanes} onTabChange={this.state.fund_spanes} />*/}
                <Tab panes={this.state.fund_spanes} />
            </div>
        )
    }
}

export default Funds
