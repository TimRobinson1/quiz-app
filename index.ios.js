/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Welcome from './src/components/welcome'
import { StackNavigator } from 'react-navigation';
import QuizQuestions from './src/components/quizquestions';

const QuizApp = StackNavigator({
  Home: { screen: Welcome },
  Quiz: { screen: QuizQuestions },
});

AppRegistry.registerComponent('QuizApp', () => QuizApp);
