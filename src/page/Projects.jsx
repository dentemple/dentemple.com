import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import asyncComponent from '../util/AsyncComponent'
import ContentSection from '../components/ContentSection'

const QuoteGenerator = asyncComponent(() => import('./QuoteGenerator'))
const RealTimeChat = asyncComponent(() => import('./RealTimeChat'))
const TicTacToe = asyncComponent(() => import('./TicTacToe'))

const Routes = () => (
  <nav>
    <h2>Projects</h2>
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

class Projects extends Component {
  render() {
    return (
      <ContentSection id="projects">
        <Switch>
          <Route exact path="/" component={Routes} />
          <Route path="/quote" component={QuoteGenerator} />
          <Route path="/chat" component={RealTimeChat} />
          <Route path="/tictactoe" component={TicTacToe} />
        </Switch>
      </ContentSection>
    )
  }
}

export default Projects
