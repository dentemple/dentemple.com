import React from 'react'
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton'

const StyledSection = styled.section`margin-top: 20px;`

const ButtonBar = () => {
  const styleOverride = {
    margin: '10px 30px'
  }
  return (
    <StyledSection>
      <RaisedButton
        href="https://github.com/dentemple"
        label="Github Link"
        secondary={true}
        style={styleOverride}
      />
      <RaisedButton
        href="https://github.com/dentemple"
        label="Github Link"
        secondary={true}
        style={styleOverride}
      />
    </StyledSection>
  )
}

export default ButtonBar
