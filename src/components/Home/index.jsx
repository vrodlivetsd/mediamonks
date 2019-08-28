import React, {Component} from 'react';
import { withAuthorization } from '../Session';
import SignOutButton from '../SignOut';
import Slider from './Slider';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    const userName = this.props.firebase.auth.currentUser && this.props.firebase.auth.currentUser.displayName ?
      this.props.firebase.auth.currentUser.displayName :
      "Dear user";
      
    return (
      <div className='home-wrapper'>
        <header>{`Welcome back, ${userName}!`}</header>
        <main>
          <Slider/>
        </main>
        <footer>
          <SignOutButton/>
        </footer>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);