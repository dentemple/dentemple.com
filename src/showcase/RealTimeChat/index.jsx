import React, { Component } from 'react'
import styled from 'styled-components'
import io from 'socket.io-client'
import Filter from 'bad-words'
import TextField from 'material-ui/TextField'

import ProjectContainer from '../../components/ProjectContainer'
import MessagesWindow from './MessagesWindow'
import Greeting from './Greeting'
import HelpfulTip from './HelpfulTip'

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

class RealTimeChat extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      message: '',
      count: 0,
      messages: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.socket = io('localhost:8080')
    this.socket.on('message', data => {
      this.setState({ messages: [...this.state.messages, data] })
    })
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    console.log(`${this.state.username}: ${this.state.message}`)
    event.preventDefault()
    const filter = new Filter()
    this.socket.emit('message', {
      author: filter.clean(this.state.username),
      message: filter.clean(this.state.message)
    })
    this.setState({ message: '' })
  }

  render() {
    return (
      <ProjectContainer header="Real Time Chat" githubUrl="https://github.com">
        <StyledColumn>
          <MessagesWindow messages={this.state.messages} />
          <Greeting />
          <StyledForm onSubmit={this.handleSubmit}>
            <TextField
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              maxLength="20"
              hintText="Username"
            />
            <TextField
              type="text"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              maxLength="140"
              hintText="Message"
            />
            <input
              style={{ backgroundColor: 'white', margin: 10, padding: 5 }}
              type="submit"
              value="Send"
            />
          </StyledForm>
          <HelpfulTip />
        </StyledColumn>
      </ProjectContainer>
    )
  }
}

export default RealTimeChat
