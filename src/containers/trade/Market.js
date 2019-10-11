import React, { Component } from 'react'
import {BidMarket} from "./Bid";
import {AskMarket} from "./Ask";
import "./css/limit.scss";

class Market extends Component {
    render() {
        return (
            <div className={"formPositionWrap"}>
                <div>
                    <BidMarket />
                </div>
                <div>
                    <AskMarket />
                </div>
            </div>
        )
    }
}

export default Market
