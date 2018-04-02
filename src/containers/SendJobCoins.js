import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postTransaction } from '../actions/index';
import RaisedButton from 'material-ui/RaisedButton';
import LoadingSpinner from '../components/loadingSpinner';
import TransactionGraph from '../components/TransactionGraph';

const style = {
  padding:0,
  width:300
};

class SendJobCoins extends Component{
  constructor(props){
          super(props);

          this.state={
               sendFrom:'',
               sendTo: '',
               amount:'',
               loading:true
         }

         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
   }
   onChange(event) {
    this.setState({ [event.target.name]: event.target.value});
}

onSubmit(event) {	
    event.preventDefault();
    this.props.postTransaction(this.state.toAddress, this.state.fromAddress, this.state.amount);
    this.setState({
         toAddress:'',
         fromAddress:'',
         amount:''
   })
};
render(){

    return(
          <div>
          <form className="form" onSubmit={this.onSubmit}>
          <center>       
          <h2 className="form-signin-heading">Send JobCoins!</h2>
          <p></p>
          <input 
          value={this.state.toAddress}
          onChange={this.onChange}
          type="text" 
          className="form-control" 
          name="toAddress" 
          placeholder="Your Address" 
          required="" 
          autofocus="" />
          <input 
          value={this.state.fromAddress}
          onChange={this.onChange}
          type="text" 
          className="form-control" 
          name="fromAddress" 
          placeholder="Send To" 
          required="" 
          autofocus="" />
          <input 
          value={this.state.amount}
          onChange={this.onChange}
          type="text" 
          className="form-control" 
          name="amount" 
          placeholder="Amount" 
          required="" 
          autofocus="" /><p></p>
          <RaisedButton label="Send JobCoins" style={style} primary={true} type="submit" />
           </center><p></p>
          </form>
          </div>
          )
    }
}

const mapStateToProps = (state) => {
  return {
    balance: state.balance,
    address: state.toAddress
  };
};

function mapDispatchToProps(dispatch){
	return bindActionCreators({postTransaction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SendJobCoins);