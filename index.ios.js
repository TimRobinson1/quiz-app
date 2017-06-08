import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Welcome from './src/components/welcome'
import { StackNavigator } from 'react-navigation';
import QuizQuestion1 from './src/components/quizquestion1';
import QuizQuestion2 from './src/components/quizquestion2';
import Results from './src/components/results';

// export default class QuizApp extends Component {
//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <Text className='texttag'>Hello World!</Text>
//       </View>
//     );
//   }
// }


const QuizApp = StackNavigator({
  Home: { screen: Welcome },
  QuizQuestion1: { screen: QuizQuestion1 },
  QuizQuestion2: { screen: QuizQuestion2 },
  Results: { screen: Results },
});

AppRegistry.registerComponent('QuizApp', () => QuizApp);
