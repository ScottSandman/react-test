import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate';
import TextInputs from './TextInputs';

const styles = {
  avatar: {
    margin: 20,
    width: 120,
    height: 120,
  },
  name: {
    fontSize: 20,
  }
};

function ImageAvatar(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Avatar alt="add photo" src="" className={classes.avatar} />
        <AddPhotoAlternate justify="flex-start" />
      </Grid>
      <div className={classes.name}>
        Janet Perkins
      </div>
    </div>
  );
}

ImageAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatar);
