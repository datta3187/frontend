import React, { Component } from 'react'
import "./css/exchange.scss";
import {connect} from "react-redux";
import {Tab} from "semantic-ui-react/dist/commonjs/modules/Tab";

const MarketInfo = (props) => {
    const tickers = props.tickers;
    const listItems = tickers.map((item) =>
        <div dataKey={item.quote_unit.toString()}>
            <b> {item.name}</b>
            <span> {item.last}</span>
            <span> {item.price_change_percent}</span>
            <span> {item.volume}</span>
        </div>
    );
    return listItems;
}

class ConnectedMarketTicker extends Component{
    constructor(props){
        super(props);

        this.state = {
            tickers :[]
        }
    }
    componentDidMount() {
        this.setState({tickers: []})
    }

    componentWillReceiveProps(newProps) {
        let  data = Object.values(newProps.allTickers)
        const selectedData = [...new Set(data.filter(x => x.quote_unit== this.props.quote))]
        this.setState({
            tickers: selectedData
        })
    }

    render(){
        return(
            <div>
                <div>
                    <span> Pair</span>
                    <span> Price</span>
                    <span> Change</span>
                    <span> Volume</span>
                </div>
                <MarketInfo tickers = { this.state.tickers }/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { allTickers: state.tradeState.globalTickers }
};

const MarketTicker = connect(mapStateToProps)(ConnectedMarketTicker);

export default MarketTicker;
