import {FETCH_USER} from '../actions/index';
import {POST_SEND} from '../actions/index';

export default function(state=null, action){
	console.log("action", action.type);
	switch(action.type){
		case FETCH_USER:
			return [action.payload.balance];
		default:
			return state;
	}
	return state;
}