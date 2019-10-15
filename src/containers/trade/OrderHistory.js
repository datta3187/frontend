import React, { Component } from 'react'

class connectedOrderHistory extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="tradeBar">
                    Order History here
                </div>
            </div>
        )
    }
}

const OrderHistory = connectedOrderHistory;
export default OrderHistory;
