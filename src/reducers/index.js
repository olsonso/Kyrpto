import { combineReducers } from 'redux';
import BalanceReducer from './Balance_reducer';
import TransactionReducer from './Transactions_reducer';

const rootReducer = combineReducers({
 	 balance:BalanceReducer,
 	 transactions:TransactionReducer
});

export default rootReducer;
