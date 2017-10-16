import styled from 'styled-components'

const Overlay = styled.div`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 99.9%;
  min-height: 600px;
  z-index: 2;
  background: black;
  opacity: 0.3;
  overflow: hidden;
`

export default Overlay
