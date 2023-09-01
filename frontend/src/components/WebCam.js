import React, { useRef} from 'react';
import Webcam from 'react-webcam';

function WebCam() {
  const webcamRef = useRef(null);

  const capture = async(e) => {
    e.preventDefault()
    const imageSrc = webcamRef.current.getScreenshot();
    // Here you can do something with the captured image, like sending it to a server
    console.log('Captured image:', imageSrc);
    const img= {userImage:imageSrc}
    const response = await fetch('/uploads', {
        method: 'POST',
        body: JSON.stringify(img),
        headers: { 'Content-type': 'image/jpeg' }
    })
    const json = await response.json()
    console.log('JSON response:', json);
  };

  return (
    <div className='webcam'>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button className='button' onClick={capture}>Capture</button>
    </div>
  );
}

export default WebCam;
