import React, { Component } from 'react'
import {Grid, Container, Divider} from 'semantic-ui-react'
import * as Api from "../../api/remoteApi";
import {toast} from "react-toastify";

class Deposit extends Component {

    constructor(props){
        super(props)
        this.state = {
            payment_address: ''
        }

    }

    componentDidMount=()=> {
        //For retrieving deposit payment addresses
        // this.getPaymentAddress();
    }

    getPaymentAddress =()=>{

        let api_url = "account/deposit_address/" + this.props.balance_arr.id
        Api.peatioApi(api_url, 'get', {})
            .then(res => {
                // const merged = {...this.props.deposit_arr, ...res}
                this.setState({payment_address: res.address});
            })
            .catch(error => {
                if (error.response) {
                    toast.error(error.response.data.errors[0]);
                } else {
                    toast.error("" + error);
                }
            })
    }

    render() {
        let t =  this.props.balance_arr;
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
