import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Linking } from 'react-native';
import Button from "react-native-button";
import styles from '../styles';

class Welcome extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Project Guinness'
  });
  render() {
    const score = 0;
    const { navigate } = this.props.navigation;
    return (
      <Image source={require('../welcome.jpg')} style={{flex: 1, height:300, width:null}}>
        <View style={styles.background}>
          <View style={styles.questionContainer}>
            <Text style={styles.greeting}>
              Are you over 18?
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => navigate('QuizQuestion1', { score: score })} style={styles.button}>
              Yes
            </Button>
          </View>
        </View>
        <View style={styles.drinkaware}>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('http://drinkaware.co.uk')}
          >
            Drink Aware
          </Text>
        </View>
      </Image>
    );
  }
}

export default Welcome;
