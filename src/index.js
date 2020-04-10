/**
 * VitalVerse application man
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//React Components
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//Auth and Amplify components
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut, SignUp } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify'
Amplify.configure(awsconfig);

//Application Components
import { Vitals } from './screens/Vitals';
import { AppContainer } from './components/AppContainer';

//For event listening and logging
import { Hub, Logger } from 'aws-amplify';
const logger = new Logger('My-Logger');

//const App: () => React$Node = () => {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    // let the Hub module listen on Auth events
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          this.setState({ authState: 'signedIn', authData: data.payload.data });
          break;
        case 'signIn_failure':
          this.setState({ authState: 'signIn', authData: null, authError: data.payload.data });
          break;
        case 'signUp':
          console.log('user signed up' + data.payload.data);
          //TODO Code here to insert into Database
          break;
        case 'confirmSignUp':
          console.log('Confirmed sign up')
          break;
        case 'signOut':
          console.log('user signed out');
          break;
        case 'signIn_failure':
          console.log('user sign in failed');
          break;
        case 'configured':
          console.log('the Auth module is configured');
          break;
        default:
          break;
      }
    });
    this.state = {
      authState: 'loading',
      authData: null,
      authError: null,
      email:null,
      phone_number:null
    }
  }

  //sign in state
  async componentDidMount() {
    console.log('on component mount');
    // check the current user when the App component is loaded
    await Auth.currentAuthenticatedUser().then(user => {
      console.log(user);
      this.setState({ authState: 'signedIn' });
    }).catch(e => {
      console.log(e);
      this.setState({ authState: 'signIn' });
    });
  }

  //signout - TODO not working
  signOut() {
    Auth.signOut().then(() => {
      this.setState({ authState: 'signIn' });
    }).catch(e => {
      console.log(e);
    });
  }

  render() {
    const { authState } = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <AppContainer>
          <Vitals />
        </AppContainer>
      </>
    )
  }
};

//signup
  // Class method to sign up a user - TODO not working
  signUp = async () => {
    try {
      await Auth.signUp({
        username, 
        password, 
        attributes: { email, phone_number }
      })
        .then(user => console.log("signup info:" + user))
    }
    catch (err) {
      console.log('error signing up user...', err)
    }
  }
  
  const signUpConfig = {
    header: 'My Customized Sign Up',
    hideAllDefaults: true,
    signUpFields: [
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 1,
        type: 'string'
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password'
      }
    ]
  };
  
// Comment this out and uncomment the last line get an un autheniticated Apps
export default withAuthenticator(App,{
  signUpConfig,
  usernameAttributes: 'email',
  includeGreetings:true}
)
//export default App;