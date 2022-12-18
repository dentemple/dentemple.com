import { render, screen } from 'src/utils/test-utils'

import Test from './ExternalLink'

describe('components/atoms/externalLink', () => {
  const testString = 'test'

  it('renders expected text', () => {
    render(<Test>{testString}</Test>, {})
    expect(screen.getByText(testString)).toBeInTheDocument()
  })
})
