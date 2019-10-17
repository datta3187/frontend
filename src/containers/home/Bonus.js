import React, {Component} from "react";
import Buttonn from '../../common/buttonn';
import Images from '../../common/images';
import HeadDesc from '../../common/headDesc';

export default class Bonus extends  Component {
    render(){
        return(
            <div className='tredence comn-section'>
                <div className="container">
                    <div className='whytradence'>
                        <h2>WHY TREDENCE?</h2>
                        <div className='rewardAndBonus tredenceBlocks'>
                            <div className='tradenceImage'>
                                <Images imagec={`${require('../../images/3Block1.jpg')}`} />
                            </div>
                            <div className='tradenceDesc'>
                                <HeadDesc heading='Rewards and Bonuses' desc='The more you trade on Tradence, the more you are rewarded. Our exiting customer rewards and trading bonuses will help build an active community of Tradence traders.' />
                            </div>
                        </div>
                        <div className='network_token tredenceBlocks leftSide'>
                            <div className='tradenceDesc'>
                                <HeadDesc heading='Tradence Network Token' desc='Tradence Network Token (TDNT) is an ERC-20 compatible token for facilitating and rewarding activity on Tradence exchange platform. TDNT users will benefit from discounted trading fees, voting for token listing, and much more.' />
                            </div>
                            <div className='tradenceImage'>
                                <Images imagec={`${require('../../images/3Block2.jpg')}`} />
                            </div>
                        </div>
                        <div className='reliable_secure tredenceBlocks'>
                            <div className='tradenceImage'>
                                <Images imagec={`${require('../../images/3Block3.jpg')}`} />
                            </div>
                            <div className='tradenceDesc'>
                                <HeadDesc heading='Reliable and Secure' desc='We take every precaution to ensure the safety of our users. Our system is specifically built to balance high transaction loads and fend off would-be attacks.' />
                            </div>
                        </div>
                        <div className='getstart'>
                            <Buttonn buttons='GET STARTED'></Buttonn>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}