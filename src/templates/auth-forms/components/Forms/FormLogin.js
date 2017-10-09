import React, {Component} from 'react';
import FormInput from "../FormInput";
import { Field, reduxForm } from 'redux-form'

class FormLogin extends Component {
  constructor() {
    super();

  }
  componentWillMount() {
    // console.log(this.props)
  }


  render() {
    const { handleSubmit } = this.props;



    return (
      <form
        className='login-c_form'
        onSubmit={handleSubmit}

      >
        <Field
          name='username'
          component='input'
          type='text'
          placeholder='Email'
        />
        <Field
          name='password'
          component='input'
          type='text'
          placeholder='Password'
        />
        <button
          type='submit'
        >
          Log In
        </button>
      </form>
    )
  }
}

// export default reduxForm({
//   form: 'login'
// })(FormLogin);

FormLogin = reduxForm({
  // a unique name for the form
  form: 'login'
})(FormLogin)

export default FormLogin;