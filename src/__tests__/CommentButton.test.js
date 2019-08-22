import React from 'react';
import { shallow } from 'enzyme';
import CommentButton from '../components/CommentButton';

it('renders without crashing', () => {
  expect(shallow(<CommentButton/>)).toMatchSnapshot();
});
