import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const Animation = keyframes`${fadeIn}`
const AnimateContents = styled.div`
  & > * {
    animation: 0.5s ${Animation};
  }
`

export default AnimateContents
