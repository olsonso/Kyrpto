import React, {Component} from 'react';
import Nav from './Nav';
import Balance from './Balance';
import TransactionGraph from './TransactionGraph';
 import {connect} from 'react-redux';
 import SendJobCoins from '../containers/SendJobCoins';

class UserHomePage extends Component {

  constructor(props){
      super(props);
    }

componentWillReceiveProps(nextProps) {
   // so this is when the props changed.
   // so if the balance change, you'd have to re-fetch.  
   console.log("component will recieve props");
   console.log(this.props.balance, nextProps.balance);
   // if (this.props.balance !== nextProps.balance) {
   //     this.props.(nextProps.balance);
   // }
}

  render() {

    return (
    	<div>
    	<Nav user = {this.props.address} />
    	<Balance balance = {this.props.balance} />
    	<TransactionGraph data={this.props.transactions} />
    	<SendJobCoins balance = {this.props.balance}/>    	
      </div>
    );
  }
}

function mapStateToProps(state){
  return {balance:state.balance, transactions:state.transactions}
}    

export default connect(mapStateToProps)(UserHomePage);