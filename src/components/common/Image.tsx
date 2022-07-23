import React from 'react'
import styled from 'styled-components'

export interface ImageProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  as?: React.ElementType
}

export const Image = styled.img<ImageProps>`
  display: flex;
  width: 100%;
`

export default Image
