import React, {Component} from 'react';
import {Button, Checkbox, Form, Input} from 'semantic-ui-react';
import {connect} from "react-redux";
import * as formatter from '../../utils/Formatter';
import {submitOrder} from '../../redux/actions/trade';

 class connectedBidLimit extends Component{
    constructor(props){
        super(props);
        this.state ={
            fields: { price: '', volume: '', market: this.props.market, side: 'bid', ord_type: 'limit'}
        }

        this.total = this.total.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = formatter.preciseNumber(e.target.value);
        this.setState({ fields });
    }

     placeOrder(){
        let fields = this.state.fields;
        this.props.submitOrder(fields);
     }

     total() {
        let fields = this.state.fields;
        if(fields.price !== '' && fields.volume !== ''){
            return formatter.preciseNumber(formatter.total(fields.price, fields.volume));
        }
        return ''
     }

    render(){
        return (
            <Form>
                <div>
                    <span>Buy ETH</span> &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <span> 100.4050 BTC </span>
                </div>

                <Form.Field>
                    <label>Price</label>
                    <Input type="number"
                           onChange={this.handleChange.bind(this, 'price')}
                           value={this.state.fields.price}
                           placeholder='Price' />
                    <span style={{ color: 'red' }}> </span>


                </Form.Field>
                <Form.Field>
                    <label>Amount</label>
                    <Input type="number"
                           onChange={this.handleChange.bind(this, 'volume')}
                           value={this.state.fields.volume}
                           placeholder='Amount' />

                    <span style={{ color: 'red' }}> </span>
                </Form.Field>

                <Form.Field>
                    <label>Total</label>
                    <Input type="number"
                           value={ this.total() }
                           placeholder='Total' />
                    <span style={{ color: 'red' }}> </span>
                </Form.Field>
                <Button type='submit' onClick={this.placeOrder} style={{color: 'white', background: '#70a800' }}>Buy ETH</Button>
            </Form>
        )
    }

}

class connectedBidMarket extends Component {
     constructor(props){
         super(props);
     }
     render(){
         return (
             <Form>
                 <div>
                     <span>Buy ETH</span> &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

}

const mapStateToProps = state => {
    return {
        market: state.trade.market
    }
};

function mapDispatchToProps(dispatch){
    return {
        submitOrder: (payload) => dispatch(submitOrder(payload))
    }
}



export const BidLimit = connect(mapStateToProps, mapDispatchToProps)(connectedBidLimit);
export const BidMarket = connect(mapStateToProps)(connectedBidMarket);



