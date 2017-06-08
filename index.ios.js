import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Welcome from './src/components/welcome'
import { StackNavigator } from 'react-navigation';
import QuizQuestions from './src/components/quizquestions';
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
  Quiz: { screen: QuizQuestions },
  Results: { screen: Results },
});

AppRegistry.registerComponent('QuizApp', () => QuizApp);
