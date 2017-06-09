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
        score: 10,
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

// this.props.navigation.state.params.score

// it("renders correctly", () => {
//   const tree = renderer.create(<Question navigation={settestQuestions} />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

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

it("displays custom questions", () => {
  const page = shallow(<Question navigation={testQuestions('Does this test work?')} />);
  expect(page.find('.question').node.props.children).toContain('Does this test work?');
});
