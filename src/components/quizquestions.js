import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Linking } from 'react-native';
import Button from "react-native-button";
import styles from '../styles';

class QuizQuestions extends React.Component {
  static navigationOptions = {
    title: 'Project Guinness'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image source={require('../quizbg.jpg')} style={{flex: 1, height:300, width:null}}>
        <View style={styles.background}>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              Are you drunk?
            </Text>
          </View>
          <View style={styles.buttonContainer}>
              <Button onPress={() => navigate('Home')} style={styles.quizButton}>
                Yes
              </Button>
              <Button onPress={() => navigate('Home')} style={styles.quizButton}>
                No
              </Button>
              <Button onPress={() => navigate('Home')} style={styles.quizButton}>
                Maybe
              </Button>
          </View>
        </View>
      </Image>
    );
  }
}
// Make the component available to other parts of the app
export default QuizQuestions;
