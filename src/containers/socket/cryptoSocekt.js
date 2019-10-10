import React, { Component } from 'react'
// import { subscribeToTimer } from '../../api/sockets';
import { connect } from '../../api/sockets';
import Websocket from 'react-websocket';

class CryptoSocekt extends Component {
    constructor(props){
        super(props);
        this.state= {
            timestamp: 'no timestamp yet'
        }
        // subscribeToTimer((err, timestamp) => this.setState({  
        //     timestamp 
        //   })); 
          
          
        connect(message => {
            console.log(message);
          });   
    }
    
    render() {
        return (
            <div>
                this.is the timer value : 
                {this.state.timestamp}
            </div>
        )
    }
}

export default CryptoSocekt