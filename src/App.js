import React from 'react';
import './App.css';
import beat1 from './beats/1beat.mp3'
import beat2 from './beats/2beat.mp3'
import beat3 from './beats/3beat.mp3'
import beat4 from './beats/4beat.mp3'
import beat5 from './beats/5beat.mp3'
import beat6 from './beats/6beat.mp3'
import beat7 from './beats/7beat.mp3'

console.clear()



class App extends React.Component {
  constructor(props){
    super(props);
    this.makeAudio = this.makeAudio.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.state={
      beats:[beat1,beat2,beat3,beat4,beat5,beat6,beat7],
      source: ""
    }
  }
  
  

 makeAudio(){
  let button = document.querySelector("div > button");
  let measure = document.querySelector("#measure");
  let timesig = document.querySelector("#timesig");
    if(button.innerText==="Push Me")
        {button.innerText="Changed"
        let s = this.state.beats[timesig.value - 1] 
        

        
;
let count= measure.value;
let uris = [];
for(let i = 0; i < count; i++){
  uris.push(s);
}

let proms = uris.map(uri => fetch(uri).then(r => r.blob()));
console.log(proms)
Promise.all(proms).then(blobs => {
    let blob = new Blob(uris.map((e,i)=>blobs[i])),
        blobUrl = URL.createObjectURL(blob),
        audio = new Audio(blobUrl);
        this.setState({
          source: audio
        })
    
});
  
        }
    else{
        button.innerText="Push Me"
    }
}

playAudio(){
  
  this.state.source.play();
  
}

render(){
  return (
    <div className="App">
      <button onClick={this.makeAudio}>Push Me</button>
      <input id="timesig" placeholder="time signature" type="number" min="1"></input>
      <input id="measure" placeholder="measure nos." type="number" min="1"></input>
      <button onClick={this.playAudio}>Play Audio</button>
    <a href={this.state.source.src} download="clicktrack.mp3">Download Me</a>
    </div>
  );
  }
}

export default App;
