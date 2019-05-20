import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';


const styles = theme => ({
  container: {
    display: 'block',
    alignItems: 'center',
    justify: 'center',
  },
  input: {
    margin: theme.spacing.unit,
    fontSize: 12,
    width: '60%',
    color: 'white',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

function Pin(props) {
  const { classes } = props;
  return (
    <Grid className={classes.container} >
      <Input
        placeholder="0123"
        className={classes.input}
        endAdornment={<InputAdornment
          position="end"
          disableTypography
          className={classes.input}
          >ACCESS PIN</InputAdornment>}
        inputProps={{
          'aria-label': 'Pin Access Code',
        }}
      />
    </Grid>
  );
}

Pin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pin);
