import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Linking } from 'react-native';
import Button from "react-native-button";
import styles from '../styles';

class QuizQuestion4 extends React.Component {
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
              Do you know where you are right now?
            </Text>
          </View>
          <View style={styles.buttonContainer}>
              <Button onPress={() => navigate('Results', { score: score + 10 })} style={styles.quizButton}>
                YOLO!
              </Button>
              <Button onPress={() => navigate('Results', { score: score + 5 })} style={styles.quizButton}>
                Uhhh...
              </Button>
              <Button onPress={() => navigate('Results', { score: score + 0 })} style={styles.quizButton}>
                Of course!
              </Button>
          </View>
        </View>
      </Image>
    );
  }
}
// Make the component available to other parts of the app
export default QuizQuestion4;
