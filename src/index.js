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

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut, SignUp } from 'aws-amplify-react-native';
Amplify.configure(awsconfig);

import { Vitals } from './screens/Vitals';
import { AppContainer } from './components/AppContainer';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
	  <AppContainer>
	    <Vitals/>
	  </AppContainer>
    </>
  );
};

// Comment this out to get an un autheniticated Apps
export default withAuthenticator(App, true);
//export default App;