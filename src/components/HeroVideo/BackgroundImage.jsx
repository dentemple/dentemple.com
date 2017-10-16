import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const BackgroundImage = () => (
  <StyledImage
    alt="people walking in an office hallway"
    src="https://s3.us-east-2.amazonaws.com/dentemple/dentemple.com/busy-people.jpg"
  />
)

export default BackgroundImage
