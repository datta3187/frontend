import React, { Component } from 'react'
import {AskLimit} from "./Ask";
import {BidLimit} from "./Bid";
import './css/limit.scss';


class Limit extends Component {
    render() {
        return (
            <div className={'formPositionWrap'}>
                <div>
                    <BidLimit />
                </div>
                <div>
                    <AskLimit />
                </div>
            </div>
        )
    }
}

export default Limit
