import React from 'react';
import { shallow } from 'enzyme';
import Song from '../components/Song';

it('renders without crashing', () => {
  expect(shallow(<Song/>)).toMatchSnapshot();
});