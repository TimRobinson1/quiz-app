import { Text } from 'react-native';
import React from 'react';
import QuizApp from '../index.ios.js';
import { shallow } from 'enzyme';
// import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it("renders correctly", () => {
  const tree = renderer.create(<QuizApp />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("has content", () => {
  const page = shallow(<QuizApp />);
  // console.log(page);
  expect(page.find('.texttag').node.props.children).toContain('Hello World!');
})
