import React, {Component} from "react";
import Buttonn from '../../common/buttonn';

export default class Announce extends  Component {
    render(){
        return(
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
                            <img src={`${require('../../images/announce-img.jpg')}`} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}