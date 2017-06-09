import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Linking } from 'react-native';
import Button from "react-native-button";
import styles from '../styles';
import { shuffle } from '../helpers/functions';

class Question extends React.Component {
  static navigationOptions = {
    title: 'Project Guinness'
  };
  render() {
    const params = this.props.navigation.state.params;
    const nav = this.props.navigation;
    const score = params.score;
    const round = params.round;
    const roundNumber = params.roundNumber + 1;
    const quiz = params.quiz;
    const nextPage = roundNumber === 5 ? 'Results' : 'Question';
    return (
      <Image source={require('../quizbg.jpg')} style={{flex: 1, height:300, width:null}}>
        <View style={styles.background}>
          <View style={styles.questionContainer}>
            <Text className='question' style={styles.question}>
              { round.question }
            </Text>
          </View>
          <View style={styles.buttonContainer}>
              { shuffle(round.answers).map(function(choice) {
                return (
                  <Button className='button' onPress={() => nav.navigate(nextPage, { score: score + choice[1], round: shuffle(quiz).pop(), roundNumber: roundNumber, quiz: quiz })} key={choice} style={styles.quizButton}>
                    { choice[0] }
                  </Button>
                )})
              }
          </View>
        </View>
      </Image>
    );
  }
}
// Make the component available to other parts of the app
export default Question;
