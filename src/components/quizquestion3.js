import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Linking } from 'react-native';
import Button from "react-native-button";
import styles from '../styles';

class QuizQuestion3 extends React.Component {
  static navigationOptions = {
    title: 'Project Guinness'
  };
  render() {
    const { navigate } = this.props.navigation;
    const score = this.props.navigation.state.params.score
    return (
      <Image source={require('../quizbg.jpg')} style={{flex: 1, height:300, width:null}}>
        <View style={styles.background}>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              How many of units of alcohol have you drunk?
            </Text>
          </View>
          <View style={styles.buttonContainer}>
              <Button onPress={() => navigate('Results', { score: score + 0 })} style={styles.quizButton}>
                Less than 2!
              </Button>
              <Button onPress={() => navigate('Results', { score: score + 5 })} style={styles.quizButton}>
                Around 4 or 5?
              </Button>
              <Button onPress={() => navigate('Results', { score: score + 10 })} style={styles.quizButton}>
                Errr....
              </Button>
          </View>
        </View>
      </Image>
    );
  }
}
// Make the component available to other parts of the app
export default QuizQuestion3;
