import React, {Component} from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  margin: 12,
};

class HomePage extends Component {


  render() {
    return (

      <div className="wrapper">
    	<form className="form-signin" >   
      <center>    
      <h2 className="form-signin-heading">Welcome!<p></p> Continue to start using JobCoin</h2>
      <p></p>
      <RaisedButton label="Start" style={style} primary={true} href="/login"/>
           </center>
      </form>
      </div>

    );
  }
}

export default HomePage