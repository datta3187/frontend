import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import Deposit from "../wallets/Deposit";
import Withdraw from "../wallets/Withdraw";
import * as Api from "../../api/remoteApi";
import {toast} from "react-toastify";

class Funds extends Component {
    constructor(props){
        super(props)
        this.state = {
            fund_spanes: [],
            record: {
                currency: '',
                balance: 0.00,
                locked: 0.00
            },
            loading: false
        }
    }
    componentDidMount() {
        //For retrieving balances
        this.getBalance();

        const fund_spanes_arr = [
            { menuItem: 'Deposit', render: () => <Tab.Pane><Deposit balance_arr={this.state.record}/></Tab.Pane> },
            { menuItem: 'Withdraw', render: () => <Tab.Pane><Withdraw balance_arr={ this.state.record} withdraw_arr={this.props.funds_arr}/></Tab.Pane> }
        ]
        this.setState({fund_spanes: fund_spanes_arr})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.funds_arr.id !== this.props.funds_arr.id) {
            this.getBalance();
        }
    }

    getBalance= ()=>{
        this.setState({loading: true});
        console.log("FUNDS_ARR_ID", this.props.funds_arr.id);
        let api_url = "/account/balances/" + this.props.funds_arr.id;
        Api.remoteApi(api_url, 'get', {}, 'peatio')
            .then(res => {
                this.setState({record: {currency: res.currency, balance: res.balance, locked: res.locked}});
                this.setState({loading: false});
            })
            .catch(error => {
                if (error.response) {
                    toast.error(error.response.data.errors[0]);
                    this.setState({loading: false});
                }
                else {
                    toast.error("" + error);
                }
            })
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