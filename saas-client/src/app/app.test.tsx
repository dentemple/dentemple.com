import { render, screen } from '@testing-library/react'

import Test from './App'

describe('components/app', () => {
  it('renders expected text', () => {
    render(<Test />)
    expect(screen.getByText('home.title')).toBeInTheDocument()
  })
})
