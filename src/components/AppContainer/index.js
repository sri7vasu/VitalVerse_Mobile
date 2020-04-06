import React from 'react'
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  sub: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  }
})

const AppContainer = (props) => {
    const { container, sub } = styles
    return (
      <ImageBackground source={require('./bg.jpg')} style={container}>
	    {props.children}
      </ImageBackground>
    );}

export { AppContainer }
