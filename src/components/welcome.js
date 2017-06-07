import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Button from "react-native-button";

const Welcome = () => {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'flex-end', backgroundColor: '#660066', borderBottomWidth: 0.5, borderColor: '#d6d7da', opacity: 0.8}}>
          <Text style={{color: 'white', fontSize: 30, alignSelf: 'center'}}>ARE YOU DRUNK?</Text>
        </View>
        <View style={{flex: 4, padding:10, backgroundColor: '#660066', opacity: 0.8}}>
          <Text style={{color: 'white', fontSize: 30, alignSelf: 'center', marginBottom: 40}}>
            Welcome to the best drunk quiz app in the world. Are you ready?
          </Text>
          <Button style={{color: '#660066', alignSelf: 'center', padding: 5, backgroundColor:'powderblue', borderWidth: 1, borderColor: '#000000', overflow: 'hidden', borderRadius: 15}}>
            Begin
          </Button>
        </View>
        <View style={{flex: 4, backgroundColor: '#660066', opacity: 0.8}}>

        </View>
      </View>
    );
  }

// Make the component available to other parts of the app
export default Welcome;
