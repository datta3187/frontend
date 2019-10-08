import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import SideBar from '../../components/Wallet/Sidebar';
import WalletLayout from '../../components/Wallet/WalletLayout';
import Deposit from '../../components/Wallet/Deposit';
import Withdraw from '../../components/Wallet/Withdraw';
import History from '../../components/Wallet/History';
import { fetchWalletData, fetchWalletAddress, setActiveWallet } from '../../redux/actions/wallet';
import { fetchHistory } from '../../redux/actions/history';
import { handleChangeWithdraw, fetchSubmitWithdraw } from '../../redux/actions/withdraw';
import Header from '../../components/Header';
import {Container} from "semantic-ui-react";
import "./Wallet.scss";

class WalletPage extends Component {
    componentDidMount() {
        this.props.fetchWalletData();
        this.props.fetchHistory();
    }

    filterHistory = list => list.filter(item => item.currency === this.props.activeWallet);

    render() {
        const {
            location,
            activeWallet,
            wallets,
            rid,
            amount,
            otp,
            withdrawIsFetching,
            withdrawHistory,
            depositHistory,
            setActiveWallet,
            fetchWalletAddress,
            fetchSubmitWithdraw,
            handleChangeWithdraw
        } = this.props;

        if (!Object.keys(wallets).length) return null;

        return(
            <div>
                <Header abc="exchangeHdr"/>
                <Container className="boxWithShadow userForms">
                    <div className="WalletPagePosition">
                        <SideBar
                            wallets={wallets}
                            activeWallet={activeWallet}
                            setActiveWallet={setActiveWallet}
                            fetchWalletAddress={fetchWalletAddress}
                        />
                        <WalletLayout location={location} activeWallet={activeWallet} wallets={wallets}>
                            <Switch>
                                <Route
                                    path="/wallets/deposit"
                                    render={() => (
                                        <div>
                                            <Deposit wallet={wallets[activeWallet]} />
                                            {/*<History history={this.filterHistory(depositHistory)} />*/}
                                        </div>
                                    )}
                                />
                                <Route
                                    path="/wallets/withdrawal"
                                    render={() => (
                                        <div>
                                            <Withdraw
                                                currency={wallets[activeWallet]}
                                                onChange={handleChangeWithdraw}
                                                rid={rid}
                                                amount={amount}
                                                otp={otp}
                                                submitting={withdrawIsFetching}
                                                onClick={fetchSubmitWithdraw}
                                            />
                                            <History history={this.filterHistory(withdrawHistory)} />
                                        </div>
                                    )}
                                />
                            </Switch>
                        </WalletLayout>
                    </div>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state){
debugger
    return {
        wallets: state.wallet.list,
        activeWallet: state.wallet.activeWallet,
        depositHistory: state.history.deposits,
        withdrawHistory: state.history.withdraws,
        rid: state.withdraw.rid,
        amount: state.withdraw.amount,
        otp: state.withdraw.otp,
        withdrawIsFetching: state.withdraw.isFetching,
    };
}


function mapDispatchToProps(dispatch) {
    debugger
    return {
        fetchWalletData: () => dispatch(fetchWalletData()),
        setActiveWallet: id => dispatch(setActiveWallet(id)),
        fetchWalletAddress: id => dispatch(fetchWalletAddress(id)),
        fetchHistory: () => dispatch(fetchHistory()),
        fetchSubmitWithdraw: () => dispatch(fetchSubmitWithdraw()),
        handleChangeWithdraw: (field, value) => dispatch(handleChangeWithdraw(field, value))
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(WalletPage);
