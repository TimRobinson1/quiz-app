import { Text } from 'react-native';
import React from 'react';
import Results from '../src/components/results.js';
import { shallow } from 'enzyme';
const testScore = function(n) {
  return { state: { params: {score: n} } };
}

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// this.props.navigation.state.params.score

it("renders correctly", () => {
  const tree = renderer.create(<Results navigation={testScore(0)} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("is a test", () => {
  const page = shallow(<Results navigation={testScore(0)} />);
  expect(page.find('.button').node.props.children).toContain('Try Again');
});

it("displays that you're good to go with a very low score", () => {
  const page = shallow(<Results navigation={testScore(0)} />);
  expect(page.find('.result').node.props.children).toContain("You're good to go!");
});

it("displays that you're okay with a low score", () => {
  const page = shallow(<Results navigation={testScore(20)} />);
  expect(page.find('.result').node.props.children).toContain("You're mostly okay.");
});

it("displays that you're tipsy with an average score", () => {
  const page = shallow(<Results navigation={testScore(30)} />);
  expect(page.find('.result').node.props.children).toContain("You're a little tipsy, matey.");
});

it("displays that you're drunk with a high score", () => {
  const page = shallow(<Results navigation={testScore(35)} />);
  expect(page.find('.result').node.props.children).toContain("You're completely smashed.");
});
