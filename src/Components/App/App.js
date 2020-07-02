import React from 'react';

import './App.css';


import  SearchBar  from '../SearchBar/SearchBar';
import  SearchResults  from '../SearchResults/SearchResults';
import  Playlist  from '../Playlist/Playlist';


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      SearchResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1}, {name: 'name2', artist: 'artist2', album: 'album2', id: 2}, {name: 'name3', artist: 'artist3', album: 'album3', id: 3}],
      playlistName: 'My Playlist',
      playlistTracks: [{name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAlbum1', id: 4}, {name: 'playlistName2', artist: 'playlistArtist2', album: 'playlistAlbum2', id: 5}, {name: 'playlistName3', artist: 'playlistArtist3', album: 'playlistAlbum3', id: 6}]

    }
  }
  render() {
return(
  <div>
  <h1>Ja<span class="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults SearchResults={this.state.SearchResults} />
      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
    </div>
  </div>
</div>
)
  }
}


export default App;
