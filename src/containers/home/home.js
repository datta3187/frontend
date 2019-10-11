import React, { Component } from 'react';
import Websocket from 'react-websocket';
import Textboxx from '../../common/textboxx';
import Buttonn from '../../common/buttonn';
import SampleTable from '../../common/sampleTable';
import Images from '../../common/images';
import HeadDesc from '../../common/headDesc';
import Teammember from '../../common/teammember';
import { Tab,Card, Image, TextArea, Icon } from 'semantic-ui-react';
import HomeCard from './card';
import Corousalp from '../../common/corousal';
import './home.css';
import card from './card';
import TabTable from './tabTable';
import SearchItem from './SearchItem';
import {connect} from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { fetchCoinData } from '../../redux/actions/livecoindata';

const panes = [
    { menuItem: 'Faviourate', render: () => <Tab.Pane><TabTable></TabTable></Tab.Pane> },
    { menuItem: 'BTC Markets', render: () => <Tab.Pane><TabTable></TabTable></Tab.Pane> },
    { menuItem: 'USDC markets', render: () => <Tab.Pane><TabTable></TabTable></Tab.Pane> },
    { menuItem: 'EXTO markets', render: () => <Tab.Pane><TabTable></TabTable></Tab.Pane> },
    { menuItem: 'Search',render: () => <SearchItem></SearchItem>}
  ]
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
        }
        this.handleData = this.handleData.bind(this);
        // this.props.fetchCoinData();
    }
        
    

    handleData(data){
        let result = JSON.parse(data);
        let coiname = result['global.tickers'];
        console.log('my data : ', result);
      
         
        // console.log(Object.keys(coiname)); 
        // let coins = [];
        // coins.push(coiname);
        // console.log('aaaaaaa ', coins)  
        // let stream_type = this.props.market + '.trades';
        // console.log('my data : ', stream_type);
        // if(typeof result[stream_type] !== 'undefined') {
        //     let formatted_data = this.changeFormat(result[stream_type]['trades'])
        //     this.props.addTrade(formatted_data)
        // }
    } 
    path() {
        return 'wss://demo.openware.com/api/v2/ranger/public/?stream=global.tickers'
    } 


    render() {
        return (
            <div>
             <Websocket url={this.path()}
                onMessage={this.handleData}/>
                <div className='banner'>
                    <img className='banner_img' src='https://static1.bigstockphoto.com/0/1/2/large1500/210463369.jpg' />
            <div className='container'>
            <div className='homebanner'>
            <div className='tradence'>
                <h2>ENHANCING YOUR TRADING EXPERIENCE</h2>
                <p>As a user centric exchange, Tradence endeavors to bring to you an exchange experience that's both trustworthy and secure.</p>
                <Buttonn buttons='WHITEPAPER'></Buttonn>
                <Buttonn buttons='NEW TO TRADENCE'></Buttonn>
            </div>
            <div className="mydiv">
                <HomeCard></HomeCard> 
            </div>

            <div className='ticketrecord'>
                <Card>
                <SampleTable></SampleTable>
                </Card>
            </div>
 
            </div>
            </div>
                </div>

            <div className='container'> 
            <div className='corousall'>
                <Corousalp></Corousalp>
            </div>

            <div className='announcement'>
                <div className='annouce'>
                    <h2>ANNOUNCEMENT</h2>
                </div>
                <div className='peerwin_img'>
                <div className='peerwin'>
                    <h2>REFER & WIN TRADING COMPETITION</h2>
                    <p>Joiin the referral program and stand a chance to win</p>
                    <Buttonn buttons='EMAIL'></Buttonn>
                    <Buttonn buttons='WIN NOW!'></Buttonn>
                </div>
                <div className='imgg'>
                        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaujnAu4SFbBNwLrEC_OWN60dRIbhc_RmlI96AxnRQV8hFlU5J' />
                </div>
                </div>
            </div>

            <div className='tredence'>
                <div className='whytradence'>
                    <h2>WHY TREDENCE?</h2>
                    <div className='rewardAndBonus'>
                        <div className='tradenceImage'>
                        <Images imagec='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5pdjKnIUofyNEwKSke7n7DjDCtgdfTqiH8enj80Msz0o2xMo_Q' />
                        </div>
                        <div className='tradenceDesc'>
                            <HeadDesc heading='Rewards and Bonuses' desc='The more you trade on Tradence, the more you are rewarded. Our exiting customer rewards and trading bonuses will help build an active community of Tradence traders.'></HeadDesc>
                        </div>
                    </div>
                    <div className='network_token'>
                    <div className='tradenceDesc'>
                            <HeadDesc heading='Rewards and Bonuses' desc='The more you trade on Tradence, the more you are rewarded. Our exiting customer rewards and trading bonuses will help build an active community of Tradence traders.'></HeadDesc>
                        </div>
                        <div className='tradenceImage'>
                        <Images imagec='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5pdjKnIUofyNEwKSke7n7DjDCtgdfTqiH8enj80Msz0o2xMo_Q' />
                        </div>
                    </div>
                    <div className='reliable_secure'>
                    <div className='tradenceImage'>
                        <Images imagec='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5pdjKnIUofyNEwKSke7n7DjDCtgdfTqiH8enj80Msz0o2xMo_Q' />
                        </div>
                        <div className='tradenceDesc'>
                            <HeadDesc heading='Rewards and Bonuses' desc='The more you trade on Tradence, the more you are rewarded. Our exiting customer rewards and trading bonuses will help build an active community of Tradence traders.'></HeadDesc>
                        </div>
                    </div>
                    <div className='getstart'>
                        <Buttonn buttons='GET STARTED'></Buttonn>
                    </div>
                </div>
            </div>

            <div className='team'>
            <div className='teamsection'>
            <Teammember imag='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOTGpokLWuaX0vpE_7snQlq59CGIdbclxxYwNEcMcwfcSVowy' post='123' name='nmb'></Teammember>
            </div>
            <div className='teamsection'>
            <Teammember imag='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOTGpokLWuaX0vpE_7snQlq59CGIdbclxxYwNEcMcwfcSVowy' post='123' name='nmb'></Teammember>
            </div>
            <div className='teamsection'>
            <Teammember imag='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOTGpokLWuaX0vpE_7snQlq59CGIdbclxxYwNEcMcwfcSVowy' post='123' name='nmb'></Teammember>
            </div>
            <div className='teamsection'>
            <Teammember imag='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOTGpokLWuaX0vpE_7snQlq59CGIdbclxxYwNEcMcwfcSVowy' post='123' name='nmb'></Teammember>
            </div>
            </div>

            <div className='office-inq'>
                <div className='office'>
                    <div className='ofc'>
                        <HeadDesc heading='Our offices' desc='around the globe'></HeadDesc>
                    </div>
                    <div className='branch'>
                        <div className='headquter'>
                        <HeadDesc heading='TRADENCE ESTONIA' subheading='REGISTERED HQ' desc='ScalaCity,tartu mnt 43, 10128 Tallin, Estonia'></HeadDesc>
                        </div>
                        <div className='subBranch'>
                        <HeadDesc heading='TRADENCE ESTONIA' subheading='REGISTERED HQ' desc='ScalaCity,tartu mnt 43, 10128 Tallin, Estonia'></HeadDesc>
                        <HeadDesc heading='TRADENCE ESTONIA' subheading='REGISTERED HQ' desc='ScalaCity,tartu mnt 43, 10128 Tallin, Estonia'></HeadDesc>
                        </div>
                    </div>
                </div>
                <div className='inquiries'>
                    <Card>
                         <h2>For Inquiries</h2>
                            <Textboxx placeholder='Name'></Textboxx>
                            <Textboxx placeholder='Email'></Textboxx>
                            <Textboxx placeholder='Subject'></Textboxx>
                            <TextArea placeholder='Message' />
                            <Buttonn buttons='CONTACT US'></Buttonn>
                            
                    </Card>
                </div>
            </div>

            <div className='footer'>
            <div className='copyrite'>
                <p>© Copyright 2018-2019 Tradence. All Rights Reserved.</p>
            </div>
            <div className='sociallink'>
            <Icon link name='facebook f' />
            <Icon link name='telegram' />
            <Icon link name='twitter' />
            <Icon link name='medium' />
            <Icon link name='github' />
            <Icon link name='youtube' />
            <Icon link name='bitcoin' />
            </div>
            
            </div>



            {/* <div className='tbs'>
                <Tab panes={panes} />
            </div>
            <Textboxx></Textboxx>
            <Buttonn buttons='click me'></Buttonn> */}
            </div> 
            </div>
        )
    }
} 

 

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchLogin: (email, password, captcha_response) =>
//             dispatch(fetchLogin(email, password, captcha_response)),

//         resetFailLogin: () => dispatch(resetFailLogin())
//     };
// }; 
function mapStateToProps(state) {
    console.log('Global ticker :  ', state )
    return {
        error: state.auth.errorLogin
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchCoinData : () => dispatch(fetchCoinData()), 
        
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps)(Home);
 