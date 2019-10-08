import React from 'react';
import QRCode from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toMinFixed } from '../../utils/index';
import { Grid, Button, Container } from 'semantic-ui-react';

const DepositView = ({ wallet: { name, address, balance, locked } }) => {
    return (
        <Container>
            <Grid columns={3} relaxed='very'>
                <Grid.Column>
                    <p>
                        {name}
                    </p>
                </Grid.Column>
                <Grid.Column>
                    <p>
                        LOCKED <br/>
                        {toMinFixed(locked, 2)}
                    </p>
                </Grid.Column>
                <Grid.Column>
                    <p>
                        BALANCE <br/>
                        {toMinFixed(balance, 2)}
                    </p>
                </Grid.Column>

                {/*<Grid.column*/}
                {/*>*/}
                   {/*<p>Please send a payment using the generated deposit address below, Your deposit will be reflected in your account after blockchain confirmation.</p>*/}
                {/*</Grid.column>*/}
                {/*<fieldset >*/}
                    {/*<legend>Deposit by wallet address</legend>*/}
                    {/*{address || 'Not found'}*/}
                {/*</fieldset>*/}
                {/*<CopyToClipboard text={address}>*/}
                    {/*<Button*/}
                        {/*disabled={!address}*/}
                    {/*>*/}
                        {/*Copy*/}
                    {/*</Button>*/}
                {/*</CopyToClipboard>*/}
            </Grid>
            {/*<Grid>*/}
                {/*{address && <QRCode fgColor="#333333" size={300} value={address} />}*/}
            {/*</Grid>*/}
        </Container>
    );
};

export default DepositView;
