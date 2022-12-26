import styled from 'styled-components'
import { BaseStyledComponent } from 'src/@types'

export interface FlatButtonProps extends BaseStyledComponent {
  secondary?: boolean
}

export const FlatButton = styled.button<FlatButtonProps>`
  /* display */
  display: flex;
  justify-content: center;
  align-items: center;

  /* box */
  height: 50px;
  width: auto;
  padding: 15px 2rem;
  background-color: ${({ theme, secondary }) => (secondary ? 'transparent' : theme.colors.primary)};
  border: 1px solid
    ${({ theme, secondary }) => (secondary ? theme.colors.onPrimary : 'transparent')};

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme, secondary }) =>
      secondary ? theme.colors.secondaryLight : theme.colors.primaryDark};
  }

  /* typography */
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.onPrimary};

  &:hover,
  &:active,
  &:focus {
    color: ${({ theme, secondary }) =>
      secondary ? theme.colors.onSecondary : theme.colors.onPrimary};
  }

  /* effects */
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
`

export default FlatButton
