import React from 'react';
import {Button, Checkbox, Form, Input} from 'semantic-ui-react';
import {connect} from "react-redux";

 const connectedBidLimit =(props) => {
    let marketTicker = props.allTickers[props.market];
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
                       onChange=''
                       onKeyUp=''
                       placeholder='Price' />

                <span style={{ color: 'red' }}> </span>


            </Form.Field>
            <Form.Field>
                <label>Amount</label>
                <Input type="number"
                       onChange=''
                       onKeyUp=''
                       placeholder='Amount' />

                <span style={{ color: 'red' }}> </span>
            </Form.Field>
            <Button type='submit' style={{color: 'white', background: '#70a800' }}>Buy ETH</Button>
        </Form>
    )
}

const connectedBidMarket =(props) => {
    let marketTicker = props.allTickers[props.market];
    return (
            <Form>
                <div>
                    <span>Buy </span> &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <span> 100.4050 BTC</span>
                </div>

                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Button type='submit' style={{color: 'white', background: '#70a800' }}>Buy ETH</Button>
            </Form>
    )
}

const mapStateToProps = state => {
    return {
        allTickers: state.tradeState.globalTickers,
        market: state.trade.market
    }
};

export const BidLimit = connect(mapStateToProps)(connectedBidLimit);
export const BidMarket = connect(mapStateToProps)(connectedBidMarket);



