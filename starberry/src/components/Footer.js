import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {sideList} from './MenuList';

const styles = {
  root: {
    flexGrow: 1,
    marginTop:10
  },
  grow: {
    flexGrow: 1,
    fontWeight:600,
    fontSize:'2.1rem'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  
  appbarstyle:{
    backgroundImage: 'linear-gradient(135deg, #C0C0C0 0%, #C0C0C0 100%)'
  }
};

class  Footer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            menuOpen:false
        }
    }
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
              <AppBar position="static" className={classes.appbarstyle}>
                <Toolbar>
                  <Typography variant="h6" color="inherit" className={classes.grow}>
                    Footer Section
                  </Typography>
                  
                </Toolbar>
              </AppBar>
            </div>
          );
    }
  
  
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);