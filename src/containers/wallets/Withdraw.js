import React, { Component } from 'react'
import { Divider, Grid, Button, Container } from 'semantic-ui-react'

class Withdraw extends Component {

    render() {
        const t =  this.props.withdraw_arr
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
                    <h5>To withdraw you have to enable 2FA</h5>
                    <br/>
                    <Button>ENABLE 2FA</Button>
                </Container>
            </div>
        )
    }
}

export default Withdraw