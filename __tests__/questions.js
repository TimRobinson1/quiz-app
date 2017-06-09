import { Text } from 'react-native';
import React from 'react';
import Question from '../src/components/question.js';
import { shallow } from 'enzyme';
const testScore = function(n) {
  return { state: { params: {score: n} } };
}
const testQuestions = function(question, answers = [['Yes', 0]]) {
  return ({
    state: {
      params: {
        score: 0,
        quiz: 'test',
        round: {
          question: question,
          answers: answers
        }
      }
    }
  })
}

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it("renders correctly", () => {
  const tree = renderer.create(<Question navigation={testQuestions('Test')} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("displays the supplied question", () => {
  const page = shallow(<Question navigation={testQuestions('Are you drunk?')} />);
  expect(page.find('.question').node.props.children).toContain('Are you drunk?');
});

it("displays the supplied answer in button", () => {
  const page = shallow(<Question navigation={testQuestions('Are you drunk?')} />);
  expect(page.find('.button').node.props.children).toContain('Yes');
});

it("can display two buttons", () => {
  const page = shallow(
    <Question navigation={testQuestions('Test', [['Yes', 10], ['No', 0]])} />
  );
  expect(page.find('.button').length).toBe(2);
});

it("can display three buttons", () => {
  const page = shallow(
    <Question navigation={
      testQuestions('Test', [['Yes', 10], ['No', 0], ['Maybe', 5]])
    } />
  );
  expect(page.find('.button').length).toBe(3);
});

it("carries through the right score with the answer", () => {
  const page = shallow(
    <Question navigation={testQuestions('Test')} />
  );
  expect(page.find('.button').node.key).toBe('Yes,0');
});

it("carries through custom scores with the matched answer", () => {
  const page = shallow(
    <Question navigation={testQuestions('Test', [['Great test', 37]])} />
  );
  expect(page.find('.button').node.key).toBe('Great test,37');
});

it("displays custom questions", () => {
  const page = shallow(<Question navigation={testQuestions('Does this test work?')} />);
  expect(page.find('.question').node.props.children).toContain('Does this test work?');
});
