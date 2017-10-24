import React from 'react'
import styled from 'styled-components'
import img from './busy-people.jpg'

const StyledImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const BackgroundImage = () => (
  <StyledImage
    alt="people walking in an office hallway"
    src={`${img}`}
  />
)

export default BackgroundImage
