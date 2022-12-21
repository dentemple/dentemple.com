import styled, { css } from 'styled-components'
import { BaseStyledComponent } from 'src/@types'

import heroImage from 'src/assets/img/hero-image.jpg'

export type { BaseStyledComponent }

/* Separated out so as to have the hero image and video styles in one place */
const HeroStyles = css`
  /* box */
  background: url(${heroImage}) no-repeat;
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 100%;
  min-height: 100%;
  margin-top: ${({ theme }) => theme.sizes.navbarHeight}px;
  z-index: 2;
`

export const Header = styled.header<BaseStyledComponent>`
  /* flex */
  display: flex;
  justify-items: center;
  align-items: center;

  /* box */
  position: relative;
  min-height: 98vh;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Image = styled.img<BaseStyledComponent>`
  ${HeroStyles}
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`

export const Overlay = styled.div<BaseStyledComponent>`
  /* box */
  background-color: #0c0c0d80;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 4;
`

export const Video = styled.video<BaseStyledComponent>`
  ${HeroStyles}
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: block;
  }
`
