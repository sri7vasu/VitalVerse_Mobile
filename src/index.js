/**
 * VitalVerse application man
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
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
import { withAuthenticator } from 'aws-amplify-react-native';
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

const signUpConfig = {
  header: 'Sign Up',
  hideAllDefaults: false,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'Username',
      key: 'Username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'password'
    }
  ]
};

// Comment this out to get an un autheniticated Apps
// export default withAuthenticator(App, { signUpConfig });
export default App;
