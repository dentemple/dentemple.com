import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: white;
  background-color: Transparent;
  font-size: 1.1em;
  border: none;
  cursor: pointer;
  outline: none;
`

const SocialMediaIcon = ({ description, component, link }) => (
  <a href={link} aria-label={`Link to ${description} profile`}>
    <StyledButton>{component}</StyledButton>
  </a>
)

export default SocialMediaIcon
