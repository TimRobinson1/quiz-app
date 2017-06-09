// Import a library to help create a Component
import React, { Component } from 'react';
import { AppRegistry, Alert } from 'react-native';

// Make a component

export function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle
  while (0 !== currentIndex) {

    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function calculate(n) {
  if (n < 15) {
    return "You're good to go!";
  } else if (n < 25) {
    return "You're mostly okay."
  } else if (n < 35) {
    return "You're a little tipsy, matey.";
  }
  return "You're completely smashed.";
}

export function resultImage(n) {
  if (n < 15) {
    return require('../allgood.jpg');
  } else if (n < 35) {
    return require("../tipsy.jpg");
  }
  return require("../drunk.jpg");
}

export function newQuiz() {
  return ([
    {
      question: 'Are you drunk?',
      answers: [['Yes', 10], ['No', 0], ['Maybe', 5]]
    },
    {
      question: 'What is 12 x 12 ?',
      answers: [['1212', 10], ['144', 0], ['136', 5]]
    },
    {
      question: 'How many units of alcohol have you drunk?',
      answers: [['Err...', 10], ['Less than 2!', 0], ['Around 4 or 5.', 5]]
    },
    {
      question: 'Do you know where you are right now?',
      answers: [['YOLO', 10], ['Of course!', 0], ['Uhh...', 5]]
    },
    {
      question: 'Do you want to text your ex right now?',
      answers: [['YESSSSS!!!', 10], ['No!', 0], ['No ex for me!', 5]]
    }
  ])
}
