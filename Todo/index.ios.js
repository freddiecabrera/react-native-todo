/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Todo } from './scripts/components/Todo'
import { Fancy } from './scripts/components/Fancy'
import { Reddit } from './scripts/components/Reddit'
import { AppRegistry, StyleSheet } from 'react-native'

const Main = () => (
  <Reddit />
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    backgroundColor: 'red'
  },
});

AppRegistry.registerComponent('Todo', () => Main);
