import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import blue from '@material-ui/core/colors/blue';



class Pairing extends Component {
  state = {
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <div>
        <Switch
          checked={this.state.checkedA}
          onChange={this.handleChange('checkedA')}
          value="checkedA"
          color="primary"
        />
        ENABLE PAIRING
      </div>
    );
  }
}

export default Pairing;
