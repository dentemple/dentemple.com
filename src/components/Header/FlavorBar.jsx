import styled, { keyframes } from 'styled-components'

const Animation = keyframes`
  from {
    transform: skewY(0deg);
  }
  to {
    transform: skewY(-6deg);
  }
`
const FlavorBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20%;
  width: 100%;
  background-color: #ffc107;
  transform: skewY(-6deg);
  transform-origin: top left;
  border-radius: 2%;
  z-index: 3;
  animation: 3s ${Animation};
`

export default FlavorBar
