import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Linking } from 'react-native';
import Button from "react-native-button";
// import styles from '../styles';

class QuizQuestions extends React.Component {
  static navigationOptions = {
    title: 'Are you Drunk?'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image source={require('../welcome.jpg')} style={{flex: 1, height:300, width:null}}>
        <View style={{flex: 1, backgroundColor: 'rgba(102,0,102,0.5)'}}>
          <View style={{flex: 1, justifyContent: 'flex-end',backgroundColor: 'rgba(102,0,102,0.5)'}}>
            <Text style={{color: 'white', fontSize: 30, alignSelf: 'center'}}>ARE YOU DRUNK?</Text>
          </View>
          <View style={{flex: 4, padding: 40, justifyContent: 'flex-end'}}>
            <Text style={{color: 'white', fontSize: 35, alignSelf: 'center', marginBottom: 40, textAlign: 'center' }}>
              You sir are drunk
            </Text>
          </View>
          <View style={{flex: 4, padding: 40}}>
              <Button onPress={() => navigate('Home')} style={{color: '#660066', height:50, fontSize:40, backgroundColor:'white', borderWidth: 1, borderColor: '#000000', overflow: 'hidden', borderRadius: 15}}>
                Yes
              </Button>
          </View>
        </View>
        <View style={{backgroundColor:'rgba(102,0,102,0.5)' }}>
          <Text style={{color: '#538EED', textDecorationLine: 'underline', textAlign: 'center',fontSize: 20 }}
            onPress={() => Linking.openURL('http://drinkaware.co.uk')}>
            Drink Aware
          </Text>
        </View>
      </Image>
    );
  }
}

// Make the component available to other parts of the app
export default QuizQuestions;
