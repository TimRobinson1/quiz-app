import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Linking } from 'react-native';
import Button from "react-native-button";
// import styles from '../styles';

class QuizQuestions extends React.Component {
  static navigationOptions = {
    title: 'Project Guinness'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image source={require('../quizbg.jpg')} style={{flex: 1, height:300, width:null}}>
        <View style={{flex: 1, backgroundColor: 'rgba(102,0,102,0.5)'}}>
          <View style={{flex: 4, padding: 40, justifyContent: 'flex-end'}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 80, alignSelf: 'center', marginBottom: 40, textAlign: 'center' }}>
              Are you drunk?
            </Text>
          </View>
          <View style={{flex: 4, padding: 40}}>
              <Button onPress={() => navigate('Home')} style={{color: '#FFFFFF', margin:10, height:50, fontSize:40, backgroundColor:'purple', borderWidth: 1, borderColor: '#FFFFFF', overflow: 'hidden', borderRadius: 15}}>
                Yes
              </Button>
              <Button onPress={() => navigate('Home')} style={{color: '#FFFFFF', margin:10, height:50, fontSize:40, backgroundColor:'purple', borderWidth: 1, borderColor: '#FFFFFF', overflow: 'hidden', borderRadius: 15}}>
                No
              </Button>
              <Button onPress={() => navigate('Home')} style={{color: '#FFFFFF', margin:10, height:50, fontSize:40, backgroundColor:'purple', borderWidth: 1, borderColor: '#FFFFFF', overflow: 'hidden', borderRadius: 15}}>
                How dare you
              </Button>
          </View>
        </View>
      </Image>
    );
  }
}

// Make the component available to other parts of the app
export default QuizQuestions;
