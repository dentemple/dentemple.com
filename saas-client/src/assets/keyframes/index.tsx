import { keyframes } from 'styled-components'

export const spinLogo = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`

export default { spinLogo }
