import React from 'react';
import {
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Welcome from './src/components/welcome';
import QuizQuestions from './src/components/quizquestions';

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
});

AppRegistry.registerComponent('QuizApp', () => QuizApp);
