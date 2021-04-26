import React from "react";
import './App.css';

const audioCtx = new AudioContext();
let buffer = null;

const load = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/Users/francoisharewood/Desktop/click-track-creator/public/1beat.mp3");
  request.responseType = "arraybuffer";
  request.onload = function() {
    let undecodedAudio = request.response;
    audioCtx.decodeAudioData(undecodedAudio, (data) => buffer = data);
  };
  request.send();
}

const play = () => {
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.start();
};


//Import Components



function App() {
  //Write JavaScript Here
  console.clear()
  
  


  
  
  function playSound(){
    alert('hi')
    console.log(0)
  }
  

  return (
    <div className="App">
      <button onClick={load()} className="button2">load</button>
      <button onClick={play()} className="button">play</button>
    </div>
  );
}

export default App;
