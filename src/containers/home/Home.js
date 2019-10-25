import React, { Component } from 'react';
import Websocket from 'react-websocket';
import SampleTable from '../../common/sampleTable';
import { Card } from 'semantic-ui-react';
import Corousalp from '../../common/corousal';
import './css/home.scss';
import {connect} from 'react-redux';
import config from "../../config";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {globalTickers} from "../../redux/actions/socketAction";

import Register from './Register';
import Announce from './Announce';
import Bonus from './Bonus';
import Team from './Team';
import Footer from './Footer';
import Headers from "../../components/Header";


class ConnectdHome extends Component {
    constructor(props){
        super(props);
        this.state= {
            tickers: {},
            currencies: []

        }
        this.handleData = this.handleData.bind(this);
    }

    path() {
        return config.webSocketUrl+ 'global.tickers'
    }

    handleData(data) {
        let result = JSON.parse(data);
        if(typeof result['global.tickers'] !== 'undefined'){
            this.setState({tickers: result["global.tickers"] })
            this.props.addGlobalTickers(this.state.tickers);
            let selectedCurrencies = Object.values(this.state.tickers).filter(ticker => ticker.quote_unit === 'usd')
            this.setState({ currencies : selectedCurrencies} )
        }
    }

    render() {
        return (
            <div>
                <Headers />
                <Websocket url={this.path()}
                           onMessage={this.handleData}/>
                <Register />

                <div className=''>
                    <div className='ticketrecord'>
                        <Card>
                            <SampleTable  curr={this.state.currencies}></SampleTable>
                        </Card>
                    </div>
                    <div className='corousall web-carousel'>
                        <Corousalp></Corousalp>
                    </div>
                    <Announce />
                    <Bonus />
                    {/*<Team />*/}
                    <Footer />
                </div>
            </div>
        )}
}

function mapStateToProps(state) {
    return {
        allTickers: state.tradeState.globalTickers
    };
}


function mapDispatchToProps(dispatch){
    return {
        addGlobalTickers: (payload) => dispatch(globalTickers(payload))
    }
}


const Home =  connect(mapStateToProps, mapDispatchToProps)(ConnectdHome);
export default Home;
 