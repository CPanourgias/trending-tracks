import React from 'react';
import { shallow } from 'enzyme';
import SongList from '../components/SongList';

const mockTracks= [{
    id: 1,
    name: 'testName',
    thumbnail: 'testThumbnail',
    audio: 'testAudio'
  }]

it('renders without crashing', () => {
  expect(shallow(<SongList tracks={mockTracks}/>)).toMatchSnapshot();
});