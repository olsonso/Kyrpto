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

	constructor(props){
      super(props);
    }

	render(){
		return(
	
	<AppBar 
		title={<span style={styles.title}> Jobcoin {this.props.user} </span>}
		iconElementRight={<FlatButton label="Logout" href="/login"/>}
		/>

		)
	}
};

export default navBar;

