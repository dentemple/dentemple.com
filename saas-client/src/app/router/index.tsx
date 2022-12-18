import { createBrowserRouter } from 'react-router-dom'

import { HomePage, ErrorPage } from 'src/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/404',
    element: <ErrorPage />,
  },
])

export default router
