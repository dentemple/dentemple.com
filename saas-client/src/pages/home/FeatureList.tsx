import styled from 'styled-components'

import { Card } from 'src/components'

import apiIcon from 'src/assets/img/api-icon.png'
import dataIcon from 'src/assets/img/data-icon.png'
import headsetIcon from 'src/assets/img/headset-icon.png'
import navIcon from 'src/assets/img/nav-icon.png'
import secureIcon from 'src/assets/img/secure-icon.png'
import shoppingIcon from 'src/assets/img/shopping-icon.png'

import { bounceAnimation } from 'src/assets/keyframes'

const SecondHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    margin: 1rem 0.5rem;
    flex: 0 0 25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const FeatureIcon = styled.img`
  cursor: pointer;
  height: 60px;
  max-width: 100%;

  &:hover {
    animation: ${bounceAnimation} 0.8s ease-in-out infinite;
    animation-fill-mode: both;
  }
`

const TriangleArt = styled.div`
  display: inline;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 25vh 90vw 50vh 0;
  border-color: transparent ${({ theme }) => theme.colors.secondaryDark} transparent transparent;

  position: absolute;
  right: 0;
  top: 0;
  z-index: -2;
`

function FeatureList() {
  // <a href="https://www.flaticon.com/free-icons/fitness-app" title="fitness-app icons">Fitness-app icons created by Freepik - Flaticon</a>

  return (
    <Card>
      <TriangleArt />
      <h2 style={{ display: 'flex', justifyContent: 'center' }}>
        <strong>Sample a Feature</strong>{' '}
      </h2>
      <SecondHeaderContainer>
        <div>
          <FeatureIcon src={apiIcon} alt='Third-Party APIs' />
        </div>
        <div>
          <FeatureIcon src={dataIcon} alt='Data Visualization' />
        </div>
        <div>
          <FeatureIcon src={navIcon} alt='Maps & Navigation' />
        </div>
        <div>
          <FeatureIcon src={shoppingIcon} alt='Shopping & Sales' />
        </div>
        <div>
          <FeatureIcon src={secureIcon} alt='Secure User Content' />
        </div>
        <div>
          <FeatureIcon src={headsetIcon} alt='Virtual Reality' />
        </div>
      </SecondHeaderContainer>
    </Card>
  )
}

export default FeatureList
