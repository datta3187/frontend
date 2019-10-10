import React from 'react';
import {Button, Checkbox, Form, Input} from 'semantic-ui-react';
import {connect} from "react-redux";
import config from '../../config';


 const connectedBidLimit =(props) => {

    return (
        <Form>
            <div>
                <span>Buy </span> &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;
                <span> 100.4050 BTC </span>
            </div>

            <Form.Field>
                <label>Price</label>
                <Input type="number"
                       placeholder='Price' />

                <span style={{ color: 'red' }}> </span>


            </Form.Field>
            <Form.Field>
                <label>Amount</label>
                <Input type="number"
                       placeholder='Amount' />

                <span style={{ color: 'red' }}> </span>
            </Form.Field>
            <Button type='submit' style={{color: 'white', background: '#70a800' }}>Buy ETH</Button>
        </Form>
    )
}

const connectedBidMarket =(props) => {
    return (
            <Form>
                <div>
                    <span>Buy </span> &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <span> 100.4050 BTC</span>
                </div>

                <Form.Field>
                    <label>Price</label>
                    <Input type="number"
                           placeholder='Price' />

                    <span style={{ color: 'red' }}> </span>


                </Form.Field>
                <Form.Field>
                    <label>Amount</label>
                    <Input type="number"
                           placeholder='Amount' />

                    <span style={{ color: 'red' }}> </span>
                </Form.Field>
                <Button type='submit' style={{color: 'white', background: '#70a800' }}>Buy ETH</Button>
            </Form>
    )
}

const mapStateToProps = state => {
    return {
        market: state.trade.market
    }
};

export const BidLimit = connect(mapStateToProps)(connectedBidLimit);
export const BidMarket = connect(mapStateToProps)(connectedBidMarket);



