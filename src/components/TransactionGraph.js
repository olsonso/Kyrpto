import React, {Component} from 'react';
import { fetchTransactions } from '../actions/index';
import {connect} from 'react-redux';
import { LineChart, ColumnChart } from 'react-chartkick';
import { Sparklines, SparklinesBars} from 'react-sparklines';
import Moment from 'moment';



class TransactionGraph extends Component {
	constructor(props){
		super(props)
		this.state={
			transactions:[]
		} 
		}


renderTransactions2(transactionData){
		const amounts= transactionData.transactions.map(transactions => ({amount:transactions.amount, toAddress:Moment(transactions.timestamp, 'YYYY-MM-DD').format('dd D')}));
		var values = {};
			amounts.forEach(function(o){
   			 values[o.toAddress] = o.amount;
   			 return values;
			})	

		return (
			<ColumnChart width={500} data={values} />
			)
		}

	renderTransactions(transactionData){
		const amounts= transactionData.transactions.map(transactions => transactions.amount);
		console.log(amounts);

		return (
			<Sparklines height={50} width={100} data={amounts}>
			 <SparklinesBars style={{ fill: "#41c3f9" }} />
			</Sparklines>
			)
		}

	render(){
		return(
		<div className="wrapper-right">
			<h1> Transactions: </h1>
			{this.props.transactions.map(this.renderTransactions2)}
			</div>
			)
	
		}

	}

function mapStateToProps(state){
	return {transactions:state.transactions}
}    

export default connect(mapStateToProps)(TransactionGraph);