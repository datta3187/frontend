import { bindActionCreators } from 'redux';
import * as userActions from './user';
// import * as walletActions from './wallet';
// import * as historyActions from './history';
// import * as withdrawActions from './withdraw';
import * as authActions from './auth';
import * as socketActions from './socketAction';

export default dispatch => ({
    actions: bindActionCreators({
        ...socketActions,
        ...userActions,
        ...authActions,
    }, dispatch)
});
