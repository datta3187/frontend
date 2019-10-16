import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Divider } from 'semantic-ui-react';
import Deposit from "../../components/Wallet/Deposit";
import Withdraw from "../../components/Wallet/Withdraw";
import History from '../../components/Wallet/History';

const WalletLayout = ({location, activeWallet = 'btc', wallets, children, other_withdraw_params }) => {
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
                               render: () => <Tab.Pane label="Deposit" component={Link} to={{pathname: '/wallets/deposit', search: location.search}}>
                                   <Deposit wallet={wallets[activeWallet]} />
                                   <History history={other_withdraw_params['depositHistory']}/>
                               </Tab.Pane>,
                           },
                           {
                               menuItem: 'Withdraw',
                               render: () => <Tab.Pane label="Withdrawal" className="withdrawMainTabs" component={Link} to={{pathname: '/wallets/withdrawal', search: location.search}}>
                                   <Withdraw
                                       currency={wallets[activeWallet]}
                                       onChange={other_withdraw_params['handleChangeWithdraw']}
                                       rid={other_withdraw_params['rid']}
                                       amount={other_withdraw_params['amount']}
                                       otp={other_withdraw_params['otp']}
                                       submitting={other_withdraw_params['withdrawIsFetching']}
                                       onClick={other_withdraw_params['fetchSubmitWithdraw']}
                                   />
                                   <History history={other_withdraw_params['withdrawHistory']} />
                               </Tab.Pane>,
                           }
                       ]}
                    />
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
