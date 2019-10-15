import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import SideBar from '../../components/Wallet/Sidebar';
import WalletLayout from '../../components/Wallet/WalletLayout';
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
            <div >
                <Header abc="exchangeHdr"/>
                <Container className="boxWithShadow walletForms">
                    <div className="WalletPagePosition">
                        <SideBar
                            wallets={wallets}
                            activeWallet={activeWallet}
                            setActiveWallet={setActiveWallet}
                            fetchWalletAddress={fetchWalletAddress}
                        />
                        <WalletLayout location={location} activeWallet={activeWallet} wallets={wallets}
                                      other_withdraw_params={{handleChangeWithdraw: handleChangeWithdraw,
                                          rid: rid,
                                          amount: amount,
                                          otp: otp,
                                          withdrawIsFetching: withdrawIsFetching,
                                          fetchSubmitWithdraw: fetchSubmitWithdraw,
                                          depositHistory: depositHistory,
                                          withdrawHistory: withdrawHistory
                                      }}
                        >
                        </WalletLayout>
                    </div>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state){
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
