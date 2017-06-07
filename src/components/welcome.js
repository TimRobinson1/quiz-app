import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';
import Button from "react-native-button";
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component'
// import styles from '../styles';

const Welcome = () => {
    return (
      <Image source={require('../welcome.jpg')} style={{flex: 1, height:300, width:null}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(102,0,102,0.9)'}}>
          <Text style={{color: 'white', fontSize: 30, alignSelf: 'center'}}>ARE YOU DRUNK?</Text>
        </View>
        <View style={{flex: 4, backgroundColor: 'rgba(102,0,102,0.5)', padding: 40, justifyContent: 'flex-end'}}>
          <Text style={{color: 'white', fontSize: 35, alignSelf: 'center', marginBottom: 40, textAlign: 'center' }}>
            Are you over 18?
          </Text>
        </View>
        <View style={{flex: 4, backgroundColor: 'rgba(102,0,102,0.5)', padding: 40}}>
            <Button style={{color: '#660066', height:50, fontSize:40, backgroundColor:'white', borderWidth: 1, borderColor: '#000000', overflow: 'hidden', borderRadius: 15}}>
              Yes
            </Button>
        </View>
      </View>
    </Image>
    );
  }

// Make the component available to other parts of the app
export default Welcome;
