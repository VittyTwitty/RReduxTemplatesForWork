import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Register extends Component {

  render() {

    return (
      <div>
        <Link to='/login'>Login</Link>
        Registration
      </div>
    )
  }
}

export default Register;
