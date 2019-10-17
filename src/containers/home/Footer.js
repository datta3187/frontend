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
                                <HeadDesc heading='HONG KONG' subheading='' desc='Shop G5 On Ground Floor, King Wing Plaza 2, No.1 on Kwan Street, Sha Tin, New Territories, HK.' />
                                <HeadDesc heading='MALAYSIA' subheading='' desc='Unit A-12A-3 Level 12A, Menara UOA, Bangsar 5 Jalan Bangsar Utama, 59000 Kuala Lumpur.' />
                                <HeadDesc heading='SINGAPORE' subheading='' desc='91 Cavenagh Road, #02-06, Singapore 229629.' />
                                <HeadDesc heading='DUBAI' subheading='' desc='Dubai Media City, Building 02, SD1-654 P.O. Box 72280, Dubai, UAE.' />
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