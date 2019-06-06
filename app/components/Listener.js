import React, { Component } from 'react';
import Video from './Video';

export class Listener extends Component {
  componentDidMount() {
    this.socket = io();
    this.socket.on('listenToMessage', function(msg) {
      console.log('Before we make it a blob: ', msg);
      var blob = new Blob([msg], { type: 'audio/webm; codecs=opus' });
      console.log('line10');
      var audio = document.createElement('audio');
      console.log('line12');
      audio.src = window.URL.createObjectURL(blob);
      console.log('line14', audio.src);
      var playPromise = audio.play();
      console.log('line16');
      console.log('playPromise: ', playPromise);
      if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            console.log('playback');
            // rec.stop();
            // rec.start(300);
          })
          .catch(error => {
            console.error(error);
          });
      }
    });
  }

  componentWillUnmount() {
    // this.socket.close();
  }
  render() {
    // let playStream = document.getElementsByClassName('playStream')[0];

    return (
      <div>
        <Video />
        <button type="submit" className="playStream">
          Play Stream
        </button>
      </div>
    );
  }
}

export default Listener;
