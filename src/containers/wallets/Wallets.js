import React, { Component } from 'react'
import { Container, Tab } from 'semantic-ui-react'
import Footer from '../../components/Footer'
import Header from "../../components/Header";
import {toast, ToastContainer} from "react-toastify";
import Funds from "../wallets/Funds";
import * as Api from "../../api/remoteApi";

class Wallets extends Component {
    constructor(props) {
        window.scrollTo(0, 0);
        super(props);
        this.state = {
            panes: [],
            loading: false
        }
    }

    componentWillMount() {
        this.setState({loading: true});
        let api_url = '/public/currencies';
        let panes_arr = [];
        Api.remoteApi(api_url, 'get', {},'peatio')
            .then(res => {
               if (res.length>0){
                   for(let i=0; i<res.length; i++){
                        panes_arr.push({ menuItem: res[i].id.toUpperCase(), render: () => <Tab.Pane><Funds funds_arr={res[i]}/></Tab.Pane> })
                   }
               }
               this.setState({panes: panes_arr});
               this.setState({loading: false});
            })
            .catch(error => {
                if (error.response) {
                    toast.error(error.response.data.errors[0]);
                    this.setState({loading: false});
                }
                else {
                    toast.error("" + error);
                }
            })
    }


    render() {
        return(
            <div>
                {/*<Header />*/}
                <Header abc="exchangeHdr" activePath='wallets'/>
                <ToastContainer
                    enableMultiContainer
                    position={toast.POSITION.TOP_RIGHT}
                />
                <Container className="boxWithShadow userForms">
                    <div className="userFormHeader">
                        <h1>Your Wallet</h1>

                        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={this.state.panes} />

                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Wallets