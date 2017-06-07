/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Welcome from './src/components/welcome'

export default class QuizApp extends Component {
  render() {
    return (
      <Welcome />
    );
  }
}

AppRegistry.registerComponent('QuizApp', () => QuizApp);
