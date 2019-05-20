import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'block',
    flexWrap: 'nowrap',
    alignContent: 'center',
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

function TextInputs(props) {
  const { classes } = props;
  const [name, setName] = useState('Janet Perkins');
  const [email, setEmail] = useState('janet.perkins@gmail.com')

  return (
    <Grid className={classes.container} >
      <div>
        <Input
          placeholder={name}
          className={classes.input}
          inputProps={{
            'aria-label': 'Name',
          }}
        />
      </div>
      <div>
        <Input
          placeholder={email}
          className={classes.input}
          inputProps={{
            'aria-label': 'email address',
          }}
        />
      </div>
    </Grid>
  );
}

TextInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextInputs);
