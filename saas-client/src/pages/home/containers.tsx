import styled from 'styled-components'

import { BaseStyledComponent } from 'src/@types'

import { dropDownAnimation } from 'src/assets/keyframes'
import { breakpoints } from 'src/app/themes/common'

export const Fieldset = styled.fieldset<BaseStyledComponent>`
  margin: auto;
`

export const HeaderContent = styled.div<BaseStyledComponent>`
  /* display */
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  /* box */
  position: relative;
  width: 100%;
  height: 70%;
  padding-top: 2rem;
  z-index: 4;
`

export const Heading1 = styled.h1<BaseStyledComponent>`
  display: inline;
  font-size: 3.8rem;
  margin: 0;
  padding: 0;

  @media (max-width: ${breakpoints.sm}px) {
    font-size: 2.8rem;
  }
`

export const HeadingText = styled.p<BaseStyledComponent>`
  font-style: italic;
`

export const Legend = styled.legend<BaseStyledComponent>`
  position: relative;
  top: -2rem;

  animation: ${dropDownAnimation} 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
`

export const Section = styled.section<BaseStyledComponent>`
  /* display */
  display: flex;
  flex-direction: row;

  /* box */
  min-height: 600px;
`

export default HeaderContent
