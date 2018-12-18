import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

class ImgContainer extends Component {

  render() {
    const { classes } = this.props

    return (
      <header class="header">
        <h1>Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
      </header>
    )
  }
}

ImgContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgContainer);
