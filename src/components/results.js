import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Linking } from 'react-native';
import Button from "react-native-button";
import styles from '../styles';
import { calculate } from '../helpers/functions'

class Results extends React.Component {
  static navigationOptions = {
    title: 'Project Guinness'
  };
  render() {
    const score = this.props.navigation.state.params.score
    return (
      <Image source={require('../quizbg.jpg')} style={{flex: 1, height:300, width:null}}>
        <View style={styles.background}>
          <View style={styles.questionContainer}>
            <Text className='result' style={styles.result}>
              { calculate(score) }
            </Text>
          </View>
          <View style={styles.buttonContainer}>
              <Button className='button' onPress={() => this.props.navigation.navigate('Home')} style={styles.quizButton}>
                Try Again
              </Button>
          </View>
        </View>
      </Image>
    );
  }
}
// Make the component available to other parts of the app
export default Results;
