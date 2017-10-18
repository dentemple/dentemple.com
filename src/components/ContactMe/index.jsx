import React, { Component } from 'react'
import styled from 'styled-components'

import TextField from 'material-ui/TextField'
import ContentSection from '../ContentSection'

const StyledDiv = styled.div`
  max-width: 70%;
  margin: 10px auto;
  padding: 1% 3%;
  text-align: center;
  animation: all 0.5s;

  @media only screen and (max-width: 600px) {
    max-width: 95%;
  }
`
const StyledInputButton = styled.input`
  margin: 10px auto;
  font-size: 1.2em;
  margin: 40px auto 10px;
  padding: 5px;
  background-color: rgb(216, 233, 243);
  border-radius: 5px;
  width: 150px;
`

class ContactMe extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      _replyto: '',
      message: '',
      messageSent: false,
      messageCount: 0,
      emailValid: false,
      formValid: false
    }
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <ContentSection heading="Contact Me" id="contact">
        <form
          action={`//formspree.io/developer@dentemple.com`}
          id="contact"
          method="POST">
          <StyledDiv>
            <TextField
              name="name"
              hintText="Full Name"
              onChange={event => this.handleChange(event)}
              maxlength={50}
              fullWidth={true}
              required
            />{' '}
            <br />
            <TextField
              name="_replyto"
              hintText="Email Address"
              onChange={event => this.handleChange(event)}
              maxlength={100}
              fullWidth={true}
              required
            />{' '}
            <br />
            <TextField
              name="message"
              hintText="Message (max: 10,000 characters)"
              onChange={event => this.handleChange(event)}
              maxlength={10000}
              rows={2}
              fullWidth={true}
              required
              multiLine={true}
            />{' '}
            <br />
            <input type="hidden" name="_subject" value="Website contact" />
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
            <input type="hidden" name="_next" value="//site.io/thanks.html" />
            <StyledInputButton type="submit" value="Send" />
          </StyledDiv>
        </form>
      </ContentSection>
    )
  }
}

export default ContactMe
