import { combineReducers } from 'redux';
import testReducer from '../modules/TEMPLATE/reducer';

const rootReducer = combineReducers({
    test: testReducer,
});

export default rootReducer;
