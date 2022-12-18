import { RouterProvider, createMemoryRouter } from 'react-router-dom'

import { render, waitFor, screen } from 'src/utils/test-utils'

import '@testing-library/jest-dom'
import Test from './Error'

test('event route', async () => {
  const FAKE_EVENT = { name: 'test event' }
  const routes = [
    {
      path: '/404',
      element: <Test />,
      loader: () => FAKE_EVENT,
    },
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: ['/', '/404'],
    initialIndex: 1,
  })

  render(<RouterProvider router={router} />, {})

  await waitFor(() => screen.findByTestId('pages/error'))
  expect(screen.getByText(/Sorry/)).toBeInTheDocument()
})
