import React from 'react';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <input 
    type="button"
    onClick={firebase.doSignOut}
    value="Sign Out"
    style={{margin: 0}}
  />
);

export default withFirebase(SignOutButton);