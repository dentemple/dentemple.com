import { style, globalStyle } from '@vanilla-extract/css'

export const heroBanner = style({
  padding: '4rem 0',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',

  '@media': {
    'screen and (max-width: 996px)': {
      padding: '2rem',
    },
  },
})

export const buttons = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
})

export const buttonsRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

globalStyle(`${buttonsRow} > *`, {
  margin: '0 0.5rem',
})
