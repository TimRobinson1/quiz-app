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
    },
    {
      question: 'What are your plans tomorrow?',
      answers: [['Eat all the things!', 10], ['Sleep', 0], ["No idea", 5]]
    },
    {
      question: 'What kind of food is the tastiest?',
      answers: [['Greasy things', 10], ['Fresh food', 0], ["Chips", 5]]
    },
    {
      question: 'How do you feel?',
      answers: [['Pretty sick', 10], ['Fine', 0], ["I'm great!", 5]]
    },
    {
      question: 'Who is the US President?',
      answers: [['The what?', 10], ['Donald Trump', 0], ["An orange loony", 5]]
    },
    {
      question: 'Pick a location',
      answers: [['Nightclub', 10], ['Park', 0], ["Pub", 5]]
    },
    {
      question: 'How many erors are their in this sentence?',
      answers: [['2', 0], ['1', 5], ["None", 10]]
    }
  ])
}
