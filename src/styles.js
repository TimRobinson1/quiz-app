import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  "background":{
    flex: 1,
    backgroundColor: 'rgba(102,0,102,0.5)'
  },
  "backimage":{
    flex: 1,
    height: 300,
    width: null
  },
  "questionContainer":{
    flex: 4,
    padding: 40,
    justifyContent: 'flex-end'
  },
  "greeting":{
    color: 'white',
    fontSize: 35,
    alignSelf: 'center',
    marginBottom: 40,
    textAlign: 'center'
  },
  "buttonContainer":{
    flex: 4,
    padding: 40
  },
  "button":{
    color: '#FFFFFF',
    height:50,
    fontSize:40,
    backgroundColor:'purple',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
    borderRadius: 15
  },
  "question":{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 80,
    alignSelf: 'center',
    marginBottom: 40,
    textAlign: 'center'
  },
  "result":{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
    marginBottom: 40,
    textAlign: 'center'
  },
  "quizButton":{
    color: '#FFFFFF',
    margin:10,
    height:50,
    fontSize:40,
    backgroundColor:'purple',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
    borderRadius: 15
  },
  "drinkaware":{
    backgroundColor:'rgba(102,0,102,0.5)'
  },
  "link":{
    color: '#538EED',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 20
  }
})

module.exports = styles
