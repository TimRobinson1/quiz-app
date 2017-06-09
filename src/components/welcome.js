import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Linking } from 'react-native';
import Button from "react-native-button";
import styles from '../styles';
import { newQuiz, shuffle } from '../helpers/functions';

class Welcome extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Project Guinness'
  });
  render() {
    const quiz = newQuiz();
    const round = shuffle(quiz).pop()
    const score = 0
    return (
      <Image source={require('../welcome.jpg')} style={{flex: 1, height:300, width:null}}>
        <View style={styles.background}>
          <View style={styles.questionContainer}>
            <Text className='header' style={styles.greeting}>
              Are you over 18?
            </Text>
          </View>
          <View style={styles.buttonContainer}>
              <Button className='start' onPress={() => this.props.navigation.navigate('Question', { score: score, round: round, quiz: quiz })} style={styles.button}>
                Yes
              </Button>
          </View>
        </View>
        <View style={styles.drinkaware}>
          <Text className='link' style={styles.link}
            onPress={() => Linking.openURL('http://drinkaware.co.uk')}>
            Drink Aware
          </Text>
        </View>
      </Image>
    );
  }
}

export default Welcome;
