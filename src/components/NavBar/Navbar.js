import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    background:'white'
  },
  grow: {
    flexGrow: 1,
  },
  background: {
    background:'black'
  }
};

class Navbar extends Component {

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.background}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Brewery Clicky Game
          </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Click an image to begin!
          </Typography>
            <Typography variant="h6" color="inherit" >
              Score: 0 | Top Score: 0
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar);
