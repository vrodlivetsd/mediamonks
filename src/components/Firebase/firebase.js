import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAliye20wsPWQZTVnnAwyKlTdBjlkxs_4k",
  authDomain: "mediamonks-fe-test.firebaseapp.com",
  databaseURL: "https://mediamonks-fe-test.firebaseio.com",
  projectId: "mediamonks-fe-test",
  storageBucket: "",
  messagingSenderId: "1057673954599",
};

class Firebase {
  constructor(){
    app.initializeApp(config);
    
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, pass) => 
    this.auth.createUserWithEmailAndPassword(email, pass);

  doSignInWithEmailAndPassword = (email, pass) => 
    this.auth.signInWithEmailAndPassword(email, pass);

  doSignOut = () => this.auth.signOut();
}

export default Firebase;