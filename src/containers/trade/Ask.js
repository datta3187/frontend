import React, {Component} from 'react'
import {Button, Form, Input} from 'semantic-ui-react'
import * as formatter from "../../utils/Formatter";
import { submitOrder } from "../../redux/actions/trade";
import {connect} from "react-redux";

class connectedAskLimit extends Component{
    constructor(props){
        super(props);

        this.state = {
            fields: { price: '', volume: '', market: this.props.market, side: 'sell', ord_type: 'limit'}
        };

        this.total = this.total.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.orderStatus){
            debugger
            this.setState({fields: { price: '', volume: '', market: this.props.market, side: 'sell', ord_type: 'limit'} } );
        }
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
        return '';
    }

    render(){
        return (
            <Form>
                <div>
                    <span>Sell ETH</span> &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <span> 100.4050 ETH </span>
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
                <Button type='submit' onClick={this.placeOrder} style={{color: 'white', background: '#ea0070' }}>Sell ETH</Button>
            </Form>
        )
    }
}

class connectedAskMarket extends Component{
    constructor(props){
        super(props);

        this.state = {
            fields: { volume: '', market: this.props.market, side: 'sell', ord_type: 'market'}
        }

        this.placeOrder = this.placeOrder.bind(this);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.orderStatus){
            debugger
            this.setState({fields: { volume: '', market: this.props.market, side: 'sell', ord_type: 'market'}})
        }
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

    render(){
        return (
            <Form>
                <div>
                    <span>Sell ETH</span> &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <span> 100.4050 ETH </span>
                </div>

                <Form.Field>
                    <label>Price</label>
                    <Input type="text"
                           value="Market Price"
                           disabled={true}
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

                <Button type='submit' onClick={this.placeOrder} style={{color: 'white', background: '#ea0070' }}>Sell ETH</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        market: state.trade.market,
        orderStatus: state.trade.orderStatus
    }
};

function mapDispatchToProps(dispatch){
    return {
        submitOrder: (payload) => dispatch(submitOrder(payload))
    }
}

export const AskLimit = connect(mapStateToProps, mapDispatchToProps)(connectedAskLimit);
export const AskMarket = connect(mapStateToProps, mapDispatchToProps)(connectedAskMarket);