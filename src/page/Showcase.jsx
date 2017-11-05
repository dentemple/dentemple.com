import React from 'react'
import Aux from 'react-aux'
import { Switch } from 'react-router-dom'

import PropsRoute from '../util/PropsRoute'
import RouteList from '../components/RouteList'
import ContentSection from '../components/ContentSection'
import AnimateContents from '../components/AnimateContents'

const Showcase = ({ showcase }) => (
  <ContentSection id="showcase">
    <AnimateContents>
      <Switch>
        <PropsRoute exact path="/" component={RouteList} showcase={showcase} />
        <UnpackRoutes routes={showcase} />
      </Switch>
    </AnimateContents>
  </ContentSection>
)

const UnpackRoutes = ({ routes }) => (
  <Aux>
    {routes.map((route, key) => (
      <PropsRoute
        key={key}
        path={route.url}
        component={route.component}
        label={route.label}
      />
    ))}
  </Aux>
)

export default Showcase
