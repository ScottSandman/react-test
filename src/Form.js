import React, { Component } from 'react';
import TextInputs from './TextInputs';
import Phone from './Phone';
import Password from './Password'
import Pin from './Pin'
import Pairing from './Pairing'
import FormButtons from './FormButtons'

class Form extends Component {
  render() {
    return (
      <div>
        <TextInputs />
        <Phone />
        <Password />
        <Pin />
        <Pairing />
        <FormButtons />
      </div>
    );
  }
}

export default Form;
