import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native'

const { height, width } = Dimensions.get('window')

export class Fancy extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.box}></View>
        <Text style={styles.text}>Hello</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: 'yellow',
    width: width / 2,
    height: height / 3,
    position: 'absolute',
    top: 30,
    left: 30,
    borderRadius: 3
  },
  text: {
    color: 'white',
    fontSize: 34,
    fontFamily: 'Arial'
  }
})
