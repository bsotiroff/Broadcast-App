import React, { Component } from 'react';
const socket = io();
import Video from './Video';

export class Broadcaster extends Component {
  componentDidMount() {
    this.socket = io();
    this.socket.on('connect', () => {
      console.log('socket connected');
      this.socket.send('connected');
    });

    let rec;
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(stream => {
        rec = new MediaRecorder(stream);
        rec.ondataavailable = event => {
          this.socket.emit('audioMessage', event.data);
          console.log('Sending to server', event.data);
        };
      })
      .catch(e => console.log(e));

    let startRecord = document.getElementsByClassName('startRecord')[0];
    let stopRecord = document.getElementsByClassName('endRecord')[0];

    let bool;
    startRecord.onclick = e => {
      console.log('started recording');
      startRecord.disabled = true;
      stopRecord.disabled = false;
      rec.start(300);
      bool = true;
    };
    stopRecord.onclick = e => {
      startRecord.disabled = false;
      stopRecord.disabled = true;
      rec.stop();
      bool = false;
    };
  }

  render() {
    return (
      <div>
        <Video />
        <button type="submit" className="startRecord">
          Record
        </button>
        <button type="submit" className="endRecord">
          Stop
        </button>
      </div>
    );
  }
}

export default Broadcaster;
