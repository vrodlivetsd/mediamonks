import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import SignUpPage from '../SignUp/index';
import SignInPage from '../SignIn/index';
import HomePage from '../Home/index';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => <Redirect to={ROUTES.HOME}/>}/>
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
    </div>
  </Router>
);
export default withAuthentication(App);