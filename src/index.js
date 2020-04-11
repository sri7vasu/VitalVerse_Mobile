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
import Amplify, { API } from 'aws-amplify';
import { Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from './aws-exports';

//Application Components
import { Vitals } from './screens/Vitals';
import { AppContainer } from './components/AppContainer';

Amplify.configure(awsconfig);

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
          //this.setState({ authState: 'signedIn', authData: data.payload.data });
          console.log('user Signed In');
          break;
        case 'signIn_failure':
          this.setState({ authState: 'signIn', authData: null, authError: data.payload.data });
          break;
        case 'signUp':
          console.log('user signed up');
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
      email: null,
      phone_number: null
    }
  }

  //sign in state
  async componentDidMount() {
    console.log('on component mount');
    // check the current user when the App component is loaded
    await Auth.currentAuthenticatedUser()
      .then(user => {
        //this.setState({ authState: 'signedIn' });

        //Do API call here to get the user details
        API.get("VitalVerseAPI",
          "/getuserdetails/" + user.attributes.sub,
          {
            headers: {
              Authorization: user.signInUserSession.idToken.jwtToken
            }
          }).then(res => {
            console.log(res);
          }).catch(error => {
            console.log(error);
          });
      }).catch(e => {
        //this.setState({ authState: 'signedIn' });
        console.log(e);
      });
  }

  //use Auth.currentSession() and Auth.currentCredentials() to get current user credentials anywhere

  //signout
  signOut() {
    Auth.signOut().then(() => {
      this.setState({ authState: 'signOut' });
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
export default withAuthenticator(App, {
  signUpConfig,
  usernameAttributes: 'email',
  includeGreetings: true
}
)
//export default App;