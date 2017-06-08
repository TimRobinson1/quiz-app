import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Welcome from './src/components/welcome'
import { StackNavigator } from 'react-navigation';
import QuizQuestion1 from './src/components/quizquestion1';
import QuizQuestion2 from './src/components/quizquestion2';
import QuizQuestion3 from './src/components/quizquestion3';
import QuizQuestion4 from './src/components/quizquestion4';
import QuizQuestion5 from './src/components/quizquestion5';
import Results from './src/components/results';

const QuizApp = StackNavigator({
  Home: { screen: Welcome },
  QuizQuestion1: { screen: QuizQuestion1 },
  QuizQuestion2: { screen: QuizQuestion2 },
  QuizQuestion3: { screen: QuizQuestion3 },
  QuizQuestion4: { screen: QuizQuestion4 },
  QuizQuestion5: { screen: QuizQuestion5 },
  Results: { screen: Results },
});

AppRegistry.registerComponent('QuizApp', () => QuizApp);
