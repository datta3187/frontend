import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Divider, Icon } from 'semantic-ui-react';
import Deposit from "../../containers/wallets/Funds";

const WalletLayout = ({location, activeWallet = 'btc', wallets, children }) => {
    console.log("WALLET LAYOUT======");
    debugger
    return (
        <Fragment>
            <main>
                <div style={{display: activeWallet ? 'none' : 'block'}}>
                    <h1>Please select a wallet</h1>
                </div>
                <div style={{width: '100%', display: activeWallet ? 'block' : 'none'}}>
                    <Tab menu={{ fluid: true, vertical: false, tabular: true }}
                        value={Math.max(['/wallets/deposit', '/wallets/withdrawal'].indexOf(location.pathname), 0)}
                       panes={[
                           {
                               menuItem: 'Deposit',
                               render: () => <Tab.Pane label="Deposit" component={Link} to={{pathname: '/wallets/deposit', search: location.search}}>Tab 1 Content</Tab.Pane>,
                           },
                           {
                               menuItem: 'Withdraw',
                               render: () => <Tab.Pane label="Withdrawal" component={Link} to={{pathname: '/wallets/withdrawal', search: location.search}}>Tab 2 Content</Tab.Pane>,
                           }
                       ]}
                    />
                        {/*<Tab.Pane*/}
                            {/*label="Deposit"*/}
                            {/*component={Link}*/}
                            {/*to={{pathname: '/wallets/deposit', search: location.search}}*/}
                            {/*// icon={<Icon disabled name='users' />}*/}
                        {/*/>*/}
                        {/*<Tab.Pane*/}
                            {/*label="Withdrawal"*/}
                            {/*component={Link}*/}
                            {/*to={{pathname: '/wallets/withdrawal', search: location.search}}*/}
                        {/*/>*/}

                    <Divider />
                    <div>
                        {children}
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default WalletLayout;
