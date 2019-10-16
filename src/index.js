import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import { history } from './redux/history';
import { ConnectedRouter } from 'connected-react-router';


import './index.scss';
import Headers from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Headers />
            <App />
            <Footer />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
