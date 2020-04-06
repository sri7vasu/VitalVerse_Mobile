/**
 * VitalVerse application man
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import { Vitals } from './screens/Vitals';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut, SignUp } from 'aws-amplify-react-native';
Amplify.configure(awsconfig);

 const App: () => React$Node = () => {
//const App = () => {
  // signUp = async () => {
  //   const {username, password,email, phone_number} = this.state
  //   try {
  //     await Auth.signUp({username,password,attributes:{email, phone_number}})
  //     console.log('Signed up!')
  //     this.setState({stage:1})
  //   }
  //   catch(err) {
  //     console.log('error signing up',err)
  //   }
  // }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Vitals />
    </>
  );
};

// Comment this out to get an un autheniticated Apps
//export default withAuthenticator(App, { signUpConfig });
export default withAuthenticator(App, true);
//export default App;