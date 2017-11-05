import React from 'react'
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton'

const StyledSection = styled.section`
  margin-top: 20px;
`

const ButtonBar = () => {
  const styleOverride = {
    margin: '20px 30px',
    border: '1.5px solid rgb(255, 64, 129)',
    borderRadius: 5
  }
  return (
    <StyledSection>
      <RaisedButton
        href="#demos"
        label="View Demos"
        secondary={true}
        style={styleOverride}
        labelStyle={{ fontSize: '0.9em' }}
      />
      <RaisedButton
        href="#contact"
        label="Contact Me"
        secondary={true}
        style={styleOverride}
        labelStyle={{ fontSize: '0.9em' }}
      />
    </StyledSection>
  )
}

export default ButtonBar
