import React from 'react'
import styled from 'styled-components'
import Avatar from 'material-ui/Avatar'

const StyledContainer = styled.div`margin: 10px;`

const EmptyImage = () => {
  const pixels = 250
  return (
    <StyledContainer>
      <Avatar size={pixels} style={{ backgroundColor: 'white' }} />
    </StyledContainer>
  )
}

export default EmptyImage
