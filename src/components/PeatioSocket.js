import config from "../config";
import Websocket from 'react-websocket';
import React from "react";
// import Auth from "../components/Auth";
import * as formatter from "../utils/Formatter";

// const auth = new Auth();

// class PeatioSocket {
//     constructor(){
//
//         this.path = this.path.bind(this);
//         this.handleData = this.handleData.bind(this);
//     }
//
//     path(stream) {
//         return config.webSocketUrl+ stream;
//     }
//
//     formatData = (data) => {
//         debugger
//         let records = []
//         data.reverse().map((record) =>{
//             records.push({price: formatter.toFixed(record.price), volume: formatter.toFixed(record.amount), time: formatter.tradeTime( record.date) })
//         });
//         return records
//     }
//
//     handleData(data) {
//         debugger
//         console.log('Hello')
//         let result = JSON.parse(data);
//         // let formatted_data = [];
//         // if(typeof result[stream_type] !== 'undefined') {
//         //     formatted_data = (typeof opt === 'undefined')
//         //                      ? (this.formatData(result[stream_type]))
//         //                      : (this.formatData(result[stream_type][opt]))
//         // }
//         // return formatted_data ;
//     }
//
//     socketConnect = (stream_type, opt=undefined) => {
//         return (
            {/*<div>*/}
                {/*<Websocket url={this.path(stream_type)}*/}
                           {/*onMessage={this.handleData} />*/}
            {/*</div>*/}
//         )
//     }
//
//     execute = (market) => {
//         // this.socketConnect((market + '.trades'), 'trades');
//         this.socketConnect('global.tickers');
//         // this.socketConnect(market + '.update');
//         // if(auth.isAuthenticated()){
//         //     this.socketConnect('order');
//         //     this.socketConnect('trade');
//         // }
//     }
// }

export const AllTickers = () => {

    path(){
        return config.webSocketUrl + 'global.tickers';
    }

    handleData(data){

    }

    render(
        <div>
            <Websocket url={ () => path() }
                       onMessage={ () => this.handleData } />
        </div>
    )
}
