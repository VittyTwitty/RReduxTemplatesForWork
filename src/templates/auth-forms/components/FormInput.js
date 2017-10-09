import React, {Component} from 'react';
import {Link} from "react-router-dom";
class FormInput extends Component {

  render() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}/>
    )
  }
}

export default FormInput;
