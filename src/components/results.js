import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Linking } from 'react-native';
import Button from "react-native-button";
import styles from '../styles';

function calculate(n) {
  if (n < 15) {
    return "You're good to go!";
  } else if (n < 35) {
    return "You're a little drunk, matey.";
  }
  return "You're completely smashed.";
}

class Results extends React.Component {
  static navigationOptions = {
    title: 'Project Guinness'
  };
  render() {
    const { navigate } = this.props.navigation;
    const score = this.props.navigation.state.params.score;
    return (
      <Image source={require('../quizbg.jpg')} style={{flex: 1, height:300, width:null}}>
        <View style={styles.background}>
          <View style={styles.questionContainer}>
            <Text style={styles.result}>
              { calculate(score) }
            </Text>
          </View>
          <View style={styles.buttonContainer}>
              <Button onPress={() => navigate('Home')} style={styles.quizButton}>
                Again?
              </Button>
          </View>
        </View>
      </Image>
    );
  }
}
// Make the component available to other parts of the app
export default Results;
