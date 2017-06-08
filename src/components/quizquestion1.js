import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Linking } from 'react-native';
import Button from "react-native-button";
import styles from '../styles';

class QuizQuestion1 extends React.Component {
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
              Are you drunk?
            </Text>
          </View>
          <View style={styles.buttonContainer}>
              <Button onPress={() => navigate('QuizQuestion2', { score: score + 10 })} style={styles.quizButton}>
                Yes
              </Button>
              <Button onPress={() => navigate('QuizQuestion2', { score: score + 0 })} style={styles.quizButton}>
                No
              </Button>
              <Button onPress={() => navigate('QuizQuestion2', { score: score + 5 })} style={styles.quizButton}>
                Maybe
              </Button>
          </View>
        </View>
      </Image>
    );
  }
}
// Make the component available to other parts of the app
export default QuizQuestion1;
