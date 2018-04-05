import React, {Component} from 'react';
import { fetchTransactions } from '../actions/index';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { LineChart, ColumnChart } from 'react-chartkick';
import Moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';


class TransactionGraph extends Component {
	constructor(props){
		super(props)
		this.state={
			transactions:[]
		} 
		}



renderTransactions(transactionData){
		const amounts= transactionData.transactions.map(transactions => ({
			amount:transactions.amount, toAddress:Moment(transactions.timestamp, 'YYYY-MM-DD HH m').format('MM/DD/YYYY HH m')}));
		var values = {};
			amounts.forEach(function(o){	
   			 values[o.toAddress] = o.amount;
   		
   			 return values;
			})
		return (
			<ColumnChart width={650} data={values} />
			)
		}

	render(){
		return(
		<div>
		
		<div className="wrapper-right">
			<h1> Transactions: </h1>
			{this.props.transactions.map(this.renderTransactions)}
			</div>
			</div>
			)
	
		}

	}

function mapStateToProps(state){
	return {
		transactions:state.transactions,
		address:state.address
	}
} 

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchTransactions}, dispatch)
}   

export default connect(mapStateToProps, mapDispatchToProps)(TransactionGraph);