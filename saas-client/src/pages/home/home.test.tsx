import { render, screen } from 'src/utils/test-utils'

import Test from './Home'

describe('components/pages/home', () => {
  it('renders expected text', () => {
    render(<Test />, {})
    expect(screen.getByText(/save to reload/)).toBeInTheDocument()
  })
})
