// react update does not require to import react 
import { useState, useRef } from 'react';
//Styles
import './styles/app.scss';
// Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from './components/Library';
// Import util songs
import data from './util';

function App() {

  // Ref
  const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(data());

  const [currentSong, setCurrentSong] = useState(songs[0]);

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default App;
