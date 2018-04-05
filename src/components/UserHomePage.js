import React, {Component} from 'react';
import Nav from './Nav';
import Balance from './Balance';
import TransactionGraph from '../containers/TransactionGraph';
import {connect} from 'react-redux';
import SendJobCoins from '../containers/SendJobCoins';
import { fetchUser } from '../actions/index';
import { bindActionCreators } from 'redux';

class UserHomePage extends Component {

  constructor(props){
      super(props);
    }


componentWillReceiveProps(nextProps) {
   // so this is when the props changed.
   // so if the balance change, you'd have to re-fetch.  
   console.log(this.props.balance, nextProps.balance);
   // if (this.props.balance !== nextProps.balance) {
   //     this.props(nextProps.balance);
   // }
}
  componentDidMount(){
    fetchUser(this.props.location.state.address);

  }

  render() {

    return (
    	<div>
    	<Nav user = {this.props.location.state.address} />
    	<Balance balance = {this.props.balance} />
    	<TransactionGraph  user = {this.props.location.state.address}/>
    	<SendJobCoins balance = {this.props.balance}/>    	
      </div>
    );
  }
}

function mapStateToProps(state){
  return {balance:state.balance}
}   

 function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchUser}, dispatch)
  } 

export default connect(mapStateToProps, mapDispatchToProps)(UserHomePage);