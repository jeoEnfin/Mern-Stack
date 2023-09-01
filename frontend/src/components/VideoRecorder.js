import React, { useState } from 'react';

function VideoRecorder() {
  const [mediaStream, setMediaStream] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const mediaRecorder = new MediaRecorder(stream);
      const recordedChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
      };

      mediaRecorder.start();
      setMediaStream(stream);
      setRecorder(mediaRecorder);
      setRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (recorder) {
      recorder.stop();
      mediaStream.getTracks().forEach(track => track.stop());
      setRecording(false);
    }
  };

  return (
    <div>
      <h1>Video Recorder</h1>
      {!recording ? (
        <button onClick={startRecording}>Start Recording</button>
      ) : (
        <>
          <button onClick={stopRecording}>Stop Recording</button>
          <video src={videoUrl} controls />
        </>
      )}
    </div>
  );
}

export default VideoRecorder;
