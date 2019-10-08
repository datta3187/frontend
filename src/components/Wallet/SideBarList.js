import React from 'react';
import cx from 'classnames';
import { toMinFixed } from '../../utils/index';
import {List, Image, Grid} from 'semantic-ui-react';

const SideBarList = ({ wallets, activeWallet = "btc", onClickWallet }) => {
    console.log("SIDE BAR LIST==============");
    return (
        <div>
            <List>
                {Object.entries(wallets).map(([currency, data]) => {
                    console.log("DATA", data);
                    console.log("CURRENCY", currency);
                    const isActive = currency === activeWallet;
                    return (
                            <List.Item
                                button
                                key={currency}
                                alignItems="flex-start"
                                onClick={onClickWallet(currency, data)}
                                selected={isActive.toString()}
                            >
                                <Grid columns='equal'>
                                    <Grid.Column width={2}>
                                        <Image avatar src='https://react.setamantic-ui.com/images/avar/small/veronika.jpg' />
                                    </Grid.Column>
                                    <Grid.Column>
                                        {data.name || 'no name'}
                                    </Grid.Column>
                                    <Grid.Column>
                                        {`${toMinFixed(data.balance, 5)} ${currency.toUpperCase()}`}
                                    </Grid.Column>
                                </Grid>
                            </List.Item>
                    );
                })}
            </List>
        </div>
    );
};

export default SideBarList;
