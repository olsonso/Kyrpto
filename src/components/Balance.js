  import React, {Component} from 'react';
  import {connect} from 'react-redux';
  import Grid from 'material-ui/GridList';

  const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});
 

class Balance extends Component {

	render(){
		return(
			<div>
			<div className="form">
			<center>
			<h1>Balance: <p></p>
			 {this.props.balance}</h1>
			 </center>
			</div>
			</div>
	);
	}
}
  

export default Balance;