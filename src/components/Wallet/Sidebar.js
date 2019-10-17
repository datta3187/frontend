import React, { Component, Fragment } from 'react';
import SideBarList from './SideBarList';
import {toast, ToastContainer} from "react-toastify";

class SideBar extends Component {
    onClickWallet = (id, data) => () => {
        this.props.setActiveWallet(id);
        if (!data.address) {
            this.props.fetchWalletAddress(id);
        }
    };

    render() {
        const { wallets, activeWallet } = this.props;
        return (
            <Fragment>
                <ToastContainer
                    enableMultiContainer
                    position={toast.POSITION.TOP_RIGHT}
                />
                <SideBarList
                wallets={wallets}
                onClickWallet={this.onClickWallet}
                />
            </Fragment>
        );
    }
}

export default SideBar;
