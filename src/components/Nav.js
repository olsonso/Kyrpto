import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

const styles = {
  title: {
    cursor: 'pointer',
  },
};


class navBar extends Component {

	render(){
		return(
	
	<AppBar 
		title={<span style={styles.title}> Hello, {this.props.user} </span>}
		iconElementRight={<FlatButton label="Logout" href="/login"/>}
		/>

		)
	}
};

export default navBar;

