import React, {Component} from "react";
import {Card, Icon, TextArea} from "semantic-ui-react";
import Textboxx from '../../common/textboxx';
import Buttonn from '../../common/buttonn';
import HeadDesc from '../../common/headDesc';



export default class Footer extends  Component {
    render(){
        return(
            <div className='office-inq comn-section'>
                <div className="container">
                    <div className='office'>
                        <div className='ofc'>
                            <HeadDesc heading='Our offices' desc='around the globe'/>
                        </div>
                        <div className='branch'>
                            <div className='headquter'>
                                <HeadDesc heading='TRADENCEESTONIA' subheading='REGISTERED HQ' desc='ScalaCity,tartu mnt 43, 10128 Tallin, Estonia' />
                            </div>
                            <div className='subBranch'>
                                <HeadDesc heading='HONG KONG' subheading='' desc='' />
                                <HeadDesc heading='MALAYSIA' subheading='' desc='' />
                                <HeadDesc heading='SINGAPORE' subheading='' desc='' />
                                <HeadDesc heading='DUBAI' subheading='' desc='' />
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

                <div className='footer footer-position'>
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
            </div>
        )
    }

}