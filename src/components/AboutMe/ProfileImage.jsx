import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

import image from './profile.jpg'
import Avatar from 'material-ui/Avatar'

const Animation = keyframes`${fadeIn}`
const StyledContainer = styled.div`
  margin: 10px;
  & > * {
    animation: 0.5s ${Animation};
  }
`

const ProfileImage = () => {
  const pixels = 250
  return (
    <StyledContainer>
      <Avatar src={image} size={pixels} />
    </StyledContainer>
  )
}

export default ProfileImage
