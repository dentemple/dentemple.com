import React from 'react'
import styled from 'styled-components'
import img from './busy-people.jpg'

const StyledVideo = styled.video`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const BackgroundVideo = () => (
  <StyledVideo
    poster={`${img}`}
    id="hero-video"
    playsInline
    autoPlay
    muted
    loop>
    <source
      type="video/mp4"
      src="https://s3.us-east-2.amazonaws.com/dentemple/dentemple.com/busy-people.mp4"
    />
    <source
      type="video/webm"
      src="https://s3.us-east-2.amazonaws.com/dentemple/dentemple.com/busy-people.webm"
    />
    <img alt="people walking in an office hallway" src={`${img}`} />
    Your browser does not support the video tag. Please upgrade your browser to
    see it.
  </StyledVideo>
)

export default BackgroundVideo
