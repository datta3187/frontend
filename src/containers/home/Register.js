import React, { Component } from "react";
import Buttonn from '../../common/buttonn';
import HomeCard from './Card';

export default class Register extends  Component {
    render(){
        return(
            <div className='banner'>
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
                            <HomeCard />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
