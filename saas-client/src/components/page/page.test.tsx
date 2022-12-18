import { render, screen } from 'src/utils/test-utils'

import Test from './Page'

describe('components/atoms/page', () => {
  const testString = 'test'

  it('renders expected text', () => {
    render(<Test>{testString}</Test>, {})
    expect(screen.getByText(testString)).toBeInTheDocument()
  })
})
