import { keyframes } from 'styled-components'

export const bounceAnimation = keyframes`
	0%, 100%, 20%, 50%, 80% {
		transform: translateY(0)
	}
	40% {
		transform: translateY(-8px)
	}
	60% {
		transform: translateY(-4px)
	}
  `

export const dropDownAnimation = keyframes`
  0% { top: -2.5rem;}
  100% { top: 0rem;}
`

export const spinLogo = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`
