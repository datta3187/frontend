import React, { Component } from 'react'
import Websocket from 'react-websocket';
import Textboxx from '../../common/textboxx';
import Buttonn from '../../common/buttonn';
import SampleTable from '../../common/sampleTable';
import Images from '../../common/images'
import HeadDesc from '../../common/headDesc'
import Teammember from '../../common/teammember'
import { Tab,Card, Image, TextArea, Icon, Grid } from 'semantic-ui-react'
import HomeCard from './card'
import Corousalp from '../../common/corousal'
import './home.scss'
import card from './card';
import TabTable from './tabTable'
import SearchItem from './SearchItem'

import '@fortawesome/fontawesome-free/css/all.min.css';
import announcement from "../../images/announce-img.jpg";
import trandancOne from "../../images/3Block1.jpg";
import trandancTwo from "../../images/3Block2.jpg";
import trandancThree from "../../images/3Block3.jpg";
import TeamOne from '../../images/th_terry_wlkinson.jpg';
import TeamTwo from '../../images/th_atul_kamble.jpg';
import TeamThree from '../../images/th_zoe_chow.jpg';
import TeamFour from '../../images/th_sungwoo_choi.jpg';
import TeamFive from '../../images/th_zareena_alwee.jpg';
import TeamSix from '../../images/th_zareena_alwee-06.jpg';
import TeamSeven from '../../images/th_zareena_alwee-07.jpg';
import TeamEight from '../../images/th_vincent_ang.jpg';




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
    }

    handleData(data){
        let result = JSON.parse(data);
        let coiname = result['global.tickers'];
        console.log('my data : ', coiname);
      
         
        // console.log(Object.keys(coiname)); 
        let coins = [];
        coins.push(coiname);
        console.log('aaaaaaa ', coins)  
        // let stream_type = this.props.market + '.trades';
        // console.log('my data : ', stream_type);
        // if(typeof result[stream_type] !== 'undefined') {
        //     let formatted_data = this.changeFormat(result[stream_type]['trades'])
        //     this.props.addTrade(formatted_data)
        // }
    } 
    path() {
        return 'wss://demo.openware.com/api/v2/ranger/public/?stream=global.tickers'
        // return config.webSocketUrl+ this.props.market + '.trades'
    } 

    render() {
        return (
            <div>
             <Websocket url={this.path()}
                           onMessage={this.handleData}/>
                <div className='banner'>
                    {/* <img className='banner_img' src='https://static1.bigstockphoto.com/0/1/2/large1500/210463369.jpg' /> */}
            <div className='container'>
            <div className='homebanner'>
            <div className='tradence'>
                <h2>ENHANCING YOUR TRADING EXPERIENCE</h2>
                <p>As a user centric exchange, Tradence endeavors to bring to you an exchange experience that's both trustworthy and secure.</p>
                <div className="action-btns">
                <Buttonn buttons='WHITEPAPER' btnDefault="button-comn"></Buttonn>
                <Buttonn buttons='NEW TO TRADENCE' btnDefault="button-comn"></Buttonn>
                </div>
            </div>
            <div className="mydiv">
                <HomeCard></HomeCard> 
            </div>

           
 
            </div>
            </div>
                </div>

            <div className=''> 
            <div className='ticketrecord'>
                <Card>
                <SampleTable></SampleTable>
                </Card>
            </div>
            <div className='corousall'>
                <Corousalp></Corousalp>
            </div>

            <div className='announcement comn-section'>
                <div className="container">
                <div className='annouce'>
                    <h2>ANNOUNCEMENT</h2>
                </div>
                <div className='peerwin_img'>
                <div className='peerwin'>
                    <h2>REFER & WIN <br></br>TRADING COMPETITION</h2>
                    <p>Join the referral program and stand a chance to win</p>
                    <div className="btns-wrap">
                    <Buttonn  buttons='EMAIL' btnDefault="comn-btn email-btn"></Buttonn>
                    <Buttonn buttons='WIN NOW!' btnDefault="comn-btn"></Buttonn>
                    </div>
                </div>
                <div className='imgg'>
                        <Image src={announcement} />
                </div>
                </div>
                </div>
            </div>

            <div className='tredence comn-section'>
                <div className="container">
                <div className='whytradence'>
                    <h2>WHY TREDENCE?</h2>
                    <div className='rewardAndBonus tredenceBlocks'>
                        <div className='tradenceImage'>
                            <Images imagec={trandancOne} />
                        </div>
                        <div className='tradenceDesc'>
                            <HeadDesc heading='Rewards and Bonuses' desc='The more you trade on Tradence, the more you are rewarded. Our exiting customer rewards and trading bonuses will help build an active community of Tradence traders.'></HeadDesc>
                        </div>
                    </div>
                    <div className='network_token tredenceBlocks leftSide'>
                        <div className='tradenceDesc'>
                            <HeadDesc heading='Tradence Network Token' desc='Tradence Network Token (TDNT) is an ERC-20 compatible 
                                token for facilitating and rewarding activity on Tradence 
                                exchange platform. TDNT users will benefit from discounted 
                                trading fees, voting for token listing, and much more.'>
                            </HeadDesc>
                        </div>
                        <div className='tradenceImage'>
                            <Images imagec={trandancTwo} />
                        </div>
                    </div>
                    <div className='reliable_secure tredenceBlocks'>
                        <div className='tradenceImage'>
                                <Images imagec={trandancThree} />
                            </div>
                            <div className='tradenceDesc'>
                                <HeadDesc heading='Reliable and Secure' desc='We take every precaution to ensure the safety of our users. 
                                    Our system is specifically built to balance high transaction 
                                    loads and fend off would-be attacks.'>
                                </HeadDesc>
                            </div>
                        </div>
                    <div className='getstart'>
                        <Buttonn buttons='GET STARTED'></Buttonn>
                    </div>
                </div>
                </div>
            </div>


            <div className='team comn-section'>
                <div className="container">
                    <h2 className='teamheading'>TEAM</h2>
                <Grid columns={4}>
                    <Grid.Row>
                        <Grid.Column mobile={8} tablet={8} computer={4} className='teamsection'>
                            <Teammember imag={TeamOne}
                                post='CEO' name='Terry Wilkinson'></Teammember>
                        </Grid.Column>
                        <Grid.Column mobile={8} tablet={8} computer={4}  className='teamsection'>
                            <Teammember imag={TeamTwo}
                                post='CTO' name='Atul Kamble'></Teammember>
                        </Grid.Column>
                        <Grid.Column mobile={8} tablet={8} computer={4} className='teamsection'>
                            <Teammember imag={TeamThree}
                                post='CFO' name='Zoe Chow'></Teammember>
                        </Grid.Column>
                        <Grid.Column mobile={8} tablet={8} computer={4} className='teamsection'>
                            <Teammember imag={TeamFour}
                                post='CMO' name='Sungwoo Choi'></Teammember>
                        </Grid.Column>
                        <Grid.Column mobile={8} tablet={8} computer={4} className='teamsection'>
                            <Teammember imag={TeamFive}
                                post={['Head of', <br/>, 'International Business']} name='Zareena Alwee'></Teammember>
                        </Grid.Column>
                        <Grid.Column mobile={8} tablet={8} computer={4} className='teamsection'>
                            <Teammember imag={TeamSix}
                                post={['Head of', <br/>, 'Compliance']} name='Elo Kukk'></Teammember>
                        </Grid.Column>
                        <Grid.Column mobile={8} tablet={8} computer={4} className='teamsection'>
                            <Teammember imag={TeamSeven}
                                post={['Head of', <br/>, 'Public Relations']} name='Olivia Orlof'></Teammember>
                        </Grid.Column>
                        <Grid.Column mobile={8} tablet={8} computer={4} className='teamsection'>
                            <Teammember imag={TeamEight}
                                post={['Head of Training', <br/>, '& Development']} name='Vincent Ang'></Teammember>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>
            </div>

            <div className='office-inq comn-section'>
                <div className="container">
                <div className='office'>
                    <div className='ofc'>
                        <HeadDesc heading='Our offices' desc='around the globe'></HeadDesc>
                    </div>
                    <div className='branch'>
                        <div className='headquter'>
                        <HeadDesc heading='TRADENCEESTONIA' subheading='REGISTERED HQ' desc='ScalaCity,tartu mnt 43, 10128 Tallin, Estonia'></HeadDesc>
                        </div>
                        <div className='subBranch'>
                        <HeadDesc heading='HONG KONG' subheading='' desc='Shop G5 On Ground Floor, King Wing Plaza 2, No.1 on Kwan Street, Sha Tin, New Territories, HK.'></HeadDesc>
                        <HeadDesc heading='MALAYSIA' subheading='' desc='Unit A-12A-3 Level 12A, Menara UOA, Bangsar 5 Jalan Bangsar Utama, 59000 Kuala Lumpur.'></HeadDesc>
                        <HeadDesc heading='SINGAPORE' subheading='' desc='91 Cavenagh Road, #02-06, Singapore 229629.'></HeadDesc>
                        <HeadDesc heading='DUBAI' subheading='' desc='Dubai Media City, Building 02, SD1-654 P.O. Box 72280, Dubai, UAE.'></HeadDesc>
                        </div>
                    </div>
                </div>
                <div className='inquiries'>
                    <Card>
                         <h2>For Inquiries</h2>
                         <div className="fields-row">
                            <Textboxx placeholder='Name'></Textboxx>
                            <Textboxx placeholder='Email'></Textboxx>
                        </div>
                            <Textboxx placeholder='Subject'></Textboxx>
                            <TextArea placeholder='Message' />
                            <Buttonn buttons='CONTACT US'></Buttonn>
                            
                    </Card>
                </div>
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
export default Home;