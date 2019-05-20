import React, { Component, useState } from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  container: {
    display: 'block',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '60%',
  },
  resize: {
    fontSize: 12,

    color: 'white',
  },
});

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;
  const [phone, setPhone] = useState('8435552323')

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

class Phone extends Component {
  state = {
    textmask: '(   )    -    ',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { textmask } = this.state;

    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <Input
            value={textmask}
            onChange={this.handleChange('textmask')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
            className={classes.resize}
          />
        </FormControl>
      </div>
    );
  }
}

Phone.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Phone);
