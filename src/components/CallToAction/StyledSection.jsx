import styled, { keyframes } from 'styled-components'
import { slideInUp } from 'react-animations'

const Animation = keyframes`${slideInUp}`
const StyledSection = styled.section`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 35%;
  margin: 0 auto;
  text-align: center;
  z-index: 3;
  overflow: hidden;
  & > * {
    animation: 1s ${Animation};
    transition: all 0.5s;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.9em;
  }

  @media only screen and (max-width: 500px) {
    font-size: 0.8em;
  }
`

export default StyledSection
