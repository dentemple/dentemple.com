import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.ul`
  font-family: Georgia, serif;
  font-size: 0.8em;
  border: 1px solid #999999;
  border-radius: 10px;
  list-style: none;
  width: 500px;
  min-height: 250px;
  margin: 20px 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 20px 0;
    padding: 5px;
  }
`
const StyledMessage = styled.li``

const MessagesWindow = ({ messages }) => (
  <StyledContainer>
    {messages.slice(-10).map((message, key) => (
      <StyledMessage key={key}>
        <strong>{message.author.toString()}</strong>:{' '}
        {message.message.toString()}
      </StyledMessage>
    ))}
  </StyledContainer>
)

export default MessagesWindow
