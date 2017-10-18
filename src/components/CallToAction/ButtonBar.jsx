import React from 'react'
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton'

const StyledSection = styled.section`margin-top: 20px;`

const ButtonBar = () => {
  const styleOverride = {
    margin: '20px 30px'
  }
  return (
    <StyledSection>
      <RaisedButton
        href="https://github.com/dentemple/dentemple.com"
        label="View on Github"
        secondary={true}
        style={styleOverride}
      />
      <RaisedButton
        href="#contact"
        label="Contact Me"
        secondary={true}
        style={styleOverride}
      />
    </StyledSection>
  )
}

export default ButtonBar
