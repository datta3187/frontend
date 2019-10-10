// import openSocket from 'socket.io-client';
// const  socket = openSocket('wss://demo.openware.com/api/v2/ranger/public/?stream=global.tickers');
// function subscribeToTimer(cb) { 
//   socket.on('timer', timestamp => cb(null, timestamp));
//   socket.emit('subscribeToTimer', 1000);
  
// }
// export  { subscribeToTimer };

import openSocket from "socket.io-client";
const socket = openSocket("wss://demo.openware.com/api/v2/ranger/public/?stream=global.tickers");

function connect(cb) {
  // listen for any messages coming through
  // of type 'chat' and then trigger the
  // callback function with said message
  socket.on("chat", message => {
    // console.log the message for posterity
    console.log(message);
    // trigger the callback passed in when
    // our App component calls connect
    cb(message);
  });
}

export { connect };