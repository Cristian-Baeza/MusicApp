// import React from 'react';

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs
}) => {

  const songSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === id);
    await setCurrentSong({ ...selectedSong[0] });
    //Set Active in library
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    //Play audio
    if (isPlaying) audioRef.current.play()
  };

  // const songSelectHandler = async () => {
  //   //add active state 
  //   const newSongs = songs.map((song) => {
  //     if (song.id === id) {
  //       return {
  //         ...song,
  //         active: true,
  //       };
  //     } else {
  //       return {
  //         ...song,
  //         active: false,
  //       };
  //     }
  //   });
  //   setSongs(newSongs);
  //   if (isPlaying) audioRef.current.play()


  //   //asked to delete on #20 another day another bug fix. 
  //   //deleting this causes clicking on a song not in order to not play. So will keep it
  //   await setCurrentSong(song);
  //   if (isPlaying) {
  //     const playPromise = audioRef.current.play();
  //     playPromise.then((audio) => {
  //       audioRef.current.play();
  //     })
  //   }
  // }
  //

  return (
    <div onClick={songSelectHandler}
      className={`library-song ${song.active ? 'selected' : ""}`}>
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong;