import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
  container: {
    display: 'block',
    flexWrap: 'wrap',
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

function Password(props) {
  const { classes } = props;
  const [password, setPassword] = useState('12345678');

  return (
    <Grid className={classes.container} >
      <Input
        type="password"
        name="password"
        placeholder="password"
        className={classes.input}
        endAdornment={<InputAdornment
          position="end"
          className={classes.input}
          disableTypography
          >CHANGE PASSWORD</InputAdornment>}
        inputProps={{
          'aria-label': 'Password',
        }}
      />
    </Grid>
  );
}

Password.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Password);
