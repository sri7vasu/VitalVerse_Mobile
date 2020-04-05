import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export class VitalInput extends React.Component{
    constructor(props) {
	super(props);
    }

    render() {
	return (
	<View style={styles.container}>
	    <Button
	    style={styles.button}
	    title={this.props.title}
	    />
	</View>
	);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
  },
  button: {
      flex: 1,
    padding: 10,
    fontSize: 18,
  },
})
