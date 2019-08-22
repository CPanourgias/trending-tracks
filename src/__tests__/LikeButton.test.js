import React from 'react';
import { shallow } from 'enzyme';
import LikeButton from '../components/LikeButton';

it('renders without crashing', () => {
  expect(shallow(<LikeButton/>)).toMatchSnapshot();
});