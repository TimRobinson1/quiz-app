import { Text } from 'react-native';
import React from 'react';
import Welcome from '../src/components/welcome.js';
import { shallow } from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it("renders correctly", () => {
  const { navigate } = jest.fn()
  const tree = renderer.create(<Welcome />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("displays correct header", () => {
  const page = shallow(<Welcome />);
  expect(page.find('.header').node.props.children).toContain('Are you over 18?');
});

it("start button is available", () => {
  const page = shallow(<Welcome />);
  expect(page.find('.start').node.props.children).toContain('Yes');
});

it("link to drink aware website displays", () => {
  const page = shallow(<Welcome />);
  expect(page.find('.link').node.props.children).toContain('Drink Aware');
});
