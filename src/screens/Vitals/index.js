import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import { VitalInput } from '../../components/VitalInput';

export class Vitals extends React.Component{
    constructor(props) {
	super(props);
    }

    render() {
	return (
	<View style={styles.container}>
	    <View style={styles.hero}>
		<Image source={require('./logo.png')}
		style={{
		    padding: 5,
		    width: 250,
		    height: 250}}
		/>
	    </View>
	    <View style={styles.row}>
		    <VitalInput title="Respiratory Rate" icon="user" />
		    <VitalInput title="Blood Pressure" icon="heart"/>
	    </View>
	    <View style={styles.row}>
		    <VitalInput title="O2 Saturation" icon="percent"/>
		    <VitalInput title="Heart Rate" icon="heartbeat" />
	    </View>
	</View>
	);
    }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      alignItems: 'center',
   flex: 1,
  },
  row: {
    flex: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  hero: {
    flex: 6,
    alignItems: 'center',
  },
})
