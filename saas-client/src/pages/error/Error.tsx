import { useRouteError } from 'react-router-dom'

import { Page, Text } from 'src/components'
import { RouteError } from 'src/types'

export function ErrorPage() {
  const error = useRouteError() as unknown as RouteError
  if (process.env.NODE_ENV !== 'test') console.error(process.env.NODE_ENV, error)

  return (
    <Page data-testid='pages/error'>
      <Text as='h1'>Oops!</Text>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>{!!error && <i>{error.statusText || error.message}</i>}</Text>
    </Page>
  )
}

export default ErrorPage
