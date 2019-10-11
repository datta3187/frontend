import React, {Component} from 'react';
import {Button, Checkbox, Form, Input} from 'semantic-ui-react';
import {connect} from "react-redux";
import * as formatter from '../../utils/Formatter';
import {submitOrder, setOrderAttrributes, totalAmount} from '../../redux/actions/trade';

 class connectedBidLimit extends Component{
    constructor(props){
        super(props);

        this.placeOrder = this.placeOrder.bind(this);
    }

    componentDidMount() {
        // set others params here
        this.props.setOrderAttrributes({ market: this.props.market, side: 'buy', ord_type: 'limit' })
    }

    handleChange(field, e){
        let fields = this.props.fields;
        fields[field] = formatter.preciseNumber(e.target.value);
        this.props.setOrderAttrributes(fields);
        this.props.totalAmount(fields);
    }

     placeOrder(){
        let fields = this.props.fields;
        this.props.submitOrder(fields);
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
                           value={this.props.fields.price}
                           placeholder='Price' />
                    <span style={{ color: 'red' }}> </span>


                </Form.Field>
                <Form.Field>
                    <label>Amount</label>
                    <Input type="number"
                           onChange={this.handleChange.bind(this, 'volume')}
                           value={this.props.fields.volume}
                           placeholder='Amount' />

                    <span style={{ color: 'red' }}> </span>
                </Form.Field>

                <Form.Field>
                    <label>Total</label>
                    <Input type="number"
                           value={ this.props.total }
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
        market: state.trade.market,
        fields: state.trade.orderParams,
        total: state.trade.total
    }
};

function mapDispatchToProps(dispatch){
    return {
        submitOrder: ((payload) => dispatch(submitOrder(payload))) ,
        setOrderAttrributes: ((payload) => dispatch(setOrderAttrributes(payload))),
        totalAmount: ((payload) => dispatch(totalAmount(payload)))
    }
}



export const BidLimit = connect(mapStateToProps, mapDispatchToProps)(connectedBidLimit);
export const BidMarket = connect(mapStateToProps)(connectedBidMarket);



