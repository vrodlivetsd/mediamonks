import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignInPage = () => (
  <div className="wrapper fadeInDown">
    <div id="formContent">
      <Link className="link active" to={ROUTES.SIGN_IN}>Sign In</Link>
      <Link className="link inactive underlineHover" to={ROUTES.SIGN_UP}>Sign Up</Link>
      <SignInForm />
    </div>
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

const SignInLink = () => (
  <p>
    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  </p>
);

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="email"
            placeholder="Email Address"
            id="login"
            className="fadeIn second"
            autoComplete='off'
          />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
            id="password" 
            className="fadeIn third" 
            autoComplete='new-password'
          />
          <input disabled={isInvalid} type="submit" className="fadeIn fourth" value="Sign In"></input>
          
          {error && <p className='error-message'>{error.message}</p>}
        </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;
export { SignInForm, SignInLink };
