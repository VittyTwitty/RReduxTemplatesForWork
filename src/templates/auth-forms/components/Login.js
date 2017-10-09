import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as usersAction from '../actions/index';
import FormLogin from "./Forms/FormLogin";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Login extends Component {
  loginHandle(values) {
    // let formInfo = {
    //   username: 'admin',
    //   password: '123qwe123'
    // };
    this.props.usersAction.loginUser({password: '123qwe123', username: 'admin'});

    // usersAction.loginUser(values);

  }



  render() {
    return (
      <div className='login-c'>
        <div className='login-c_with'>
          <button className='login-c_with-fb'>
            Log in with Facebook
          </button>
          <button className='login-c_with-google'>
            Log in with Google
          </button>
        </div>
        <div className='login-c_divider'>
          OR
        </div>
        <FormLogin
          onSubmit={(e)=>this.loginHandle(e)}
        />
        <a href="#"> Forgot password?</a>
        <div className='login-c_goto-signup'>
          <span>Don't have an account?</span>
          <Link to={`/register`}>Sign Up</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  usersAction: bindActionCreators(usersAction, dispatch)
});

export default connect(null, mapDispatchToProps)(Login);