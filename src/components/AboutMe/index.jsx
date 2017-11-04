import React, { Component } from 'react'
import styled from 'styled-components'
import Async from 'react-code-splitting'

import ContentSection from '../ContentSection'
import TextBlock from './TextBlock'

const Container = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const ProfileImage = () => <Async load={import('./ProfileImage')} />
const EmptyImage = () => <Async load={import('./EmptyImage')} />

class AboutMe extends Component {
  constructor() {
    super()
    this.state = {
      isMounted: false
    }
  }
  componentDidMount() {
    this.setState({ isMounted: true })
  }
  render() {
    return (
      <ContentSection id="about">
        <Container>
          {this.state.isMounted ? <ProfileImage /> : <EmptyImage />}
          <TextBlock {...this.props} />
        </Container>
      </ContentSection>
    )
  }
}

export default AboutMe
