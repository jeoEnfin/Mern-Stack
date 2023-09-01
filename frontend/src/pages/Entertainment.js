import React from 'react'
import VideoRecorder from '../components/VideoRecorder'
import WebCam from '../components/WebCam'


function Entertainment() {
 
  return (
    <div className='entertainment'>
      <h1>Entertainment Page</h1>
      <WebCam />
      <VideoRecorder />
    </div>
  )
}

export default Entertainment
