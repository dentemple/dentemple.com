import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import asyncComponent from '../util/AsyncComponent'
import ContentSection from '../components/ContentSection'
import AnimateContents from '../components/AnimateContents'

const QuoteGenerator = asyncComponent(() => import('./QuoteGenerator'))
const RealTimeChat = asyncComponent(() => import('./RealTimeChat'))
const TicTacToe = asyncComponent(() => import('./TicTacToe'))

const Routes = () => (
  <nav style={{ padding: '0 30px 30px' }}>
    <h2 style={{ textAlign: 'center' }}>Projects</h2>
    <p>
      <Link to="/chat">Real-time Chat</Link>
    </p>
    <p>
      <Link to="/quote">Random Quote Generator</Link>
    </p>
    <p>
      <Link to="/tictactoe">Tic Tac Toe Game</Link>
    </p>
  </nav>
)

const Projects = () => (
  <ContentSection id="projects">
    <AnimateContents>
      <Switch>
        <Route exact path="/" component={Routes} />
        <Route path="/quote" component={QuoteGenerator} />
        <Route path="/chat" component={RealTimeChat} />
        <Route path="/tictactoe" component={TicTacToe} />
      </Switch>
    </AnimateContents>
  </ContentSection>
)

export default Projects
