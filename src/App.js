import React, { useEffect } from 'react'
import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo'

import styled from 'styled-components'

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const CaptureCore = styled.div`
  border-radius: 100%;
  border: 2px solid black;
  background-color: white;
  height: 55px;
  width: 55px;
  transition: all 0.1s ease;
`

const CaptureButton = styled.button`
  height: 70px;
  width: 70px;
  border-radius: 100%;
  background-color: white;
  position: absolute;
  bottom: 40px;
  left: calc(50% - 45px);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active,
  &:hover {
    & > ${CaptureCore} {
      border: 5px solid black;
      height: 45px;
      width: 45px;
    }
  }
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const App = () => {
  const openCamera = async (webcamId) => {
    const webcam = document.getElementById(webcamId)
    const camera = new CameraPhoto(webcam)
    await camera.startCamera(FACING_MODES.USER)
  }

  useEffect(() => {
    openCamera('webcam')
  }, [])

  return (
    <AppWrapper>
      <Video autoPlay playsInline muted id="webcam" />
      <CaptureButton>
        <CaptureCore />
      </CaptureButton>
    </AppWrapper>
  )
}

export default App
