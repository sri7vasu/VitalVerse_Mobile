import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import FontAwesome from '../../node_modules/react-native-vector-icons/FontAwesome';

export class VitalInput extends React.Component{
    constructor(props) {
	super(props);
    }

    render() {
	return (
	<View style={styles.container}>
	    <Card containerStyle={styles.card} style={styles.card}  >
		<FontAwesome style={styles.icon} name={this.props.icon}/>
		<Text style={styles.placeholder}>{this.props.title}</Text>
	    </Card>
	</View>
	);
    }
}

const styles = StyleSheet.create({
  container: {
    opacity: .6,
    flex: 1,
    paddingTop: 2,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    flexDirection: 'column-reverse',
  },
  card: {
    flex: 1,
    padding: 5,
    fontSize: 24,
    backgroundColor: 'rgb(181, 69, 82)',
  },
  icon: {
    textAlign: "center",
    fontSize: 36,
  },
  placeholder: {
    fontSize: 12,
    opacity: 1,
    textAlign: "center",
    fontWeight: 'bold',
  },
})
