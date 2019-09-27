import React, { Component } from 'react'
import {Grid, Container, Divider} from 'semantic-ui-react'

class Deposit extends Component {

    render() {
        const t =  this.props.deposit_arr
        return (
            <div>
                <Container>
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                            <p>
                                LOCKED <br/>
                                {t.locked}
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>
                                BTC BALANCE <br/>
                                {t.balance}
                            </p>
                        </Grid.Column>
                    </Grid>

                    <Divider section />
                    <h5>Submit a deposit using the following address or QR code. Your deposit will be reflected in your account after 6 confirmations</h5>
                    <br/>
                </Container>
            </div>
        )
    }
}

export default Deposit
