import React, { Component } from 'react'
import "./css/exchange.scss";
import {connect} from "react-redux";
import {Tab} from "semantic-ui-react/dist/commonjs/modules/Tab";
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';
import { Grid } from 'semantic-ui-react'

class ConnectedMarketTicker extends Component{
    constructor(props){
        super(props);

        this.state = {
            tickers :[],
            isVolume: false
        }

        this._renderHeader = this._renderHeader.bind(this)
        this._renderRow = this._renderRow.bind(this)
    }
    componentDidMount() {
        this.setState({tickers: Object.values(this.props.allTickers)});
    }

    componentWillReceiveProps(newProps) {
        let  data = Object.values(newProps.allTickers);
        this.setState({ tickers: data });
    }

    handleChange(input_type){
        let flag = false
        if(input_type === 'volume'){
            flag =true
        }
        this.setState({isVolume: flag});
    }

    _renderHeader(props){
        const {isVolume} = this.state;

        return (
            <div>
                <div>
                    <input
                        size={10}
                        type="text"/>
                    <input
                        type="radio"
                        name="helo"
                        onChange={this.handleChange.bind(this, 'change')}
                        checked={this.state.isVolume === false}
                    /> Change
                    &nbsp;
                    <input
                        type="radio"
                        name="helo"
                        onChange={this.handleChange.bind(this, 'volume')}
                        checked={this.state.isVolume}
                    /> Volume
                </div>
                <div className="ui grid">
                    <div className="three column row">
                        <div className="column">
                            {props.columns[0]}
                        </div>
                        <div className="column">
                            {props.columns[1]}
                        </div>
                        <div className={ isVolume ? 'hide' : 'column'}>
                            {props.columns[2]}
                        </div>
                        <div className={ isVolume ? 'column' : 'hide'}>
                            {props.columns[3]}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    _renderRow(props){
        const {isVolume} = this.state;
        const comingQuote = props.columns[0].props.title.split('/')[1];

        return (
            <div className={this.props.quote.toUpperCase() === comingQuote ? 'ui grid' : 'hide'} >
                <div className="three column row">
                    <div className="column">
                        {props.columns[0]}
                    </div>
                    <div className="column">
                        {props.columns[1]}
                    </div>
                    <div className={ isVolume ? 'hide' : 'column'}>
                        {props.columns[2]}
                    </div>
                    <div className={ isVolume ? 'column' : 'hide'}>
                        {props.columns[3]}
                    </div>
                </div>
            </div>
        );
    }


    render(){
        return(
            <div>
                <div>
                    <Table
                        width={320}
                        height={350}
                        headerHeight={15}
                        rowHeight={45}
                        rowCount={this.state.tickers.length}
                        rowGetter={({ index }) => this.state.tickers[index]}
                        headerRowRenderer={this._renderHeader}
                        rowRenderer={ this._renderRow}
                    >
                        <Column
                            label='Pair'
                            dataKey='name'
                            width={100}
                            disableSort={true}
                        />
                        <Column
                            width={100}
                            label='Price'
                            dataKey='last'
                        />
                        <Column
                            width={100}
                            label='Change'
                            dataKey='price_change_percent'
                        />

                        <Column
                            width={100}
                            label='Volume'
                            dataKey='volume'
                        />
                    </Table>
                </div>
                <div>
                    {/*<MarketInfo tickers = { this.state.tickers } quote={this.props.quote} flag={this.state.isVolume} />*/}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { allTickers: state.tradeState.globalTickers }
};

const MarketTicker = connect(mapStateToProps)(ConnectedMarketTicker);

export default MarketTicker;
