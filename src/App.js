// react update does not require to import react 
import { useState } from 'react';
//Styles
import './styles/app.scss'
// Adding components
import Player from "./components/Player"
import Song from "./components/Song"
// Import util songs
import data from './util'


function App() {
  // State
  const [songs, setSongs] = useState(data());

  const [currentSong, setCurrentSong] = useState(songs[0])

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
