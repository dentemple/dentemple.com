import styled from 'styled-components'

import { dropDownAnimation } from 'src/assets/keyframes'
import { breakpoints } from 'src/app/themes/common'

import { BaseStyledComponent } from 'src/@types'

export const Fieldset = styled.fieldset`
  /* display */
  flex-direction: column;

  /* box */
  margin: auto;
  min-height: 0;
  min-width: 0;
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

  /* typography */
  @media (min-width: ${breakpoints.md}px) {
    font-size: 1.2rem;
  }
`

export const HeaderContentItem = styled.div`
  /* display */
  display: flex;
  flex-direction: column;

  /* box */
  position: relative;
  padding: 1rem;
  width: 100%;

  @media (min-width: ${breakpoints.md}px) {
    margin-right: calc(50% - 100px);
  }
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

export default HeaderContent
