import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: white;
  background-color: Transparent;
  font-size: 1.1em;
  border: none;
  cursor: pointer;
  outline: none;
  transition-property: transform;
  transition-duration: 0.3s;

  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    color: rgb(0, 188, 212);
  }
`

const SocialMediaIcon = ({ description, component, link }) => (
  <a href={link} aria-label={`Link to ${description} profile`}>
    <StyledButton>{component}</StyledButton>
  </a>
)

export default SocialMediaIcon
