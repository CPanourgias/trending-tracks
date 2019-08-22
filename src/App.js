import React from 'react';
import './App.css';

import SongList from './components/SongList'

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      tracks: []
    }
  }
  // Fetching trending tracks from JAM API
  componentDidMount() {
    // eslint-disable-next-line
    fetch('https://cors-anywhere.herokuapp.com/https://api-stg.jam-community.com/song/trending')
    .then((response) => response.json())
    .then(data => {this.setState({ tracks: data})})
    .catch(error => console.log(error))
  }
  
  render() {
    const { tracks } = this.state;
    return(
      <div className="App">
           <section className="cf fl w-100 w-100-ns tc">
          <h2>Albums</h2>
        </section>
        <section className="cf fl w-100 w-100-ns tc">
           <SongList tracks={tracks}/>
       </section>
        </div>
      );
    }
    
  }
  export default App;
  

