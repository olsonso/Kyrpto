import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';
export const POST_SEND = 'POST_SEND';
export const FETCH_TRANSACTION = "FETCH_TRANSACTION";

export const ROOT_URL='https://jobcoin.gemini.com/caterer/api/'

export function fetchUser(address){
	const url = `${ROOT_URL}addresses/${address}`;
	const request = axios.get(url);
	return{
		type: FETCH_USER,
		payload: new Promise((resolve, reject) => {
          axios.get(url).then(response => resolve(response.data))
      })
	};
}

export function fetchTransactions(address){
	const url = `${ROOT_URL}transactions`;
	const request = axios.get(url);
	return{
		type: FETCH_TRANSACTION,
		payload: new Promise((resolve, reject) => {
          axios.get(url).then(response => resolve(response.data))
      })
	};
}

export function postTransaction(toAddress, fromAddress, amount){
	const data = {
			toAddress:toAddress,
			fromAddress: fromAddress,
			amount: amount
			 }
	const url = `${ROOT_URL}transactions`;
	return{
		type: POST_SEND,
		payload: new Promise((resolve, reject) => {
          axios.post(url, data).then(response => resolve(response.data))
      })
	};
}