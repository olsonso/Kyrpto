  import React, {Component} from 'react';
  import axios from 'axios';	
  import { Router, Route, browserHistory } from 'react-router';
  import { connect } from 'react-redux';
  import { bindActionCreators } from 'redux';
  import { fetchUser } from '../actions/index';
  import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 15
};

  class LoginForm extends Component {
  	constructor(props){
  		super(props);

  		this.state={
  			address: ''
  		}

  		this.onChange = this.onChange.bind(this);
  		this.onSubmit = this.onSubmit.bind(this);
  	}

  	onChange(event) {
  		this.setState({ [event.target.name]: event.target.value });
  	}

  	onSubmit(event) {	
  		event.preventDefault();

  		this.props.fetchUser(this.state.address);
  		browserHistory.push({
  			pathname:"/userHomePage",
  			state: {address: this.state.address}

  		});

  	};


  	render(){
  		return(


  			<div className="wrapper">
        <center>
  			<form className="form-signin" onSubmit={this.onSubmit}>       
  			<h2 className="form-signin-heading">Sign in With Your JobCoin Address</h2>
  			<p></p>
  			<input 
  			value={this.state.address}
  			onChange={this.onChange}
  			type="text" 
  			className="form-control" 
  			name="address" 
  			placeholder="JobCoin Address" 
  			required="" 
  			autofocus=""/>
  			<p></p>
        <RaisedButton label="Login" style={style} primary={true} type="submit" />  
  			</form>
        </center>
  			</div>
  			);
  	}
  }

  function mapDispatchToProps(dispatch){
  	return bindActionCreators({fetchUser}, dispatch)
  }

  export default connect(null, mapDispatchToProps)(LoginForm);

