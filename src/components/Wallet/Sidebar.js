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
        console.log("WALLET SIDEBAR=========", activeWallet);
        return (
            <Fragment>
                <ToastContainer
                    enableMultiContainer
                    position={toast.POSITION.TOP_RIGHT}
                />
                {/*<Container className="boxWithShadow userForms">*/}
                <SideBarList
                wallets={wallets}
                onClickWallet={this.onClickWallet}
                />
                {/*</Container>*/}
                {/*<Hidden smUp implementation="js">*/}
                    {/*<div style={{width: '100%', display: activeWallet ? 'none' : 'block'}}>*/}
                        {/*<SideBarList*/}
                            {/*wallets={wallets}*/}
                            {/*onClickWallet={this.onClickWallet}*/}
                        {/*/>*/}
                    {/*</div>*/}
                {/*</Hidden>*/}
                {/*<Hidden xsDown implementation="css">*/}
                    {/*<Drawer*/}
                        {/*className={classes.drawer}*/}
                        {/*variant="permanent"*/}
                        {/*anchor="left"*/}
                        {/*classes={{ paper: classes.drawerPaper }}*/}
                    {/*>*/}
                        {/*<div className={classes.toolbar} />*/}
                        {/*<SideBarList*/}
                            {/*wallets={wallets}*/}
                            {/*activeWallet={activeWallet}*/}
                            {/*onClickWallet={this.onClickWallet}*/}
                        {/*/>*/}
                    {/*</Drawer>*/}
                {/*</Hidden>*/}
            </Fragment>
        );
    }
}

export default SideBar;
