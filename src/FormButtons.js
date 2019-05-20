import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    fontSize: 12,
  },
  input: {
    display: 'none',
  },
});

function FormButtons(props) {
  const { classes } = props;
  return (
    <div style={{background: "white"}}>
      <Button color="primary" className={classes.button}>
        Cancel
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Save
      </Button>
    </div>
  );
}

FormButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormButtons);
