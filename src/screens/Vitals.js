import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VitalInput } from '../components/VitalInput';

export class Vitals extends React.Component{
    constructor(props) {
	super(props);
    }

    render() {
	return (
	<View style={styles.container}>
	    <View style={styles.hero}>
		<Text> TEst </Text>
	    </View>
	    <View style={styles.row}>
		    <VitalInput title="Test" />
	    </View>
	    <View style={styles.row}>
		    <VitalInput title="Test" />
		    <VitalInput title="Test" />
	    </View>
	    <View style={styles.row}>
		    <VitalInput title="Test" />
		    <VitalInput title="Test" />
	    </View>
	</View>
	);
    }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
   flex: 1,
  },
  row: {
      flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hero: {
    flex: 5,
    alignItems: 'center',
  },
})
