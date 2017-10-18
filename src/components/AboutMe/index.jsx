import React, { Component } from 'react'
import styled from 'styled-components'

import ContentSection from '../ContentSection'
import EmptyImage from './EmptyImage'
import ProfileImage from './ProfileImage'
import TextBlock from './TextBlock'

const Container = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

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
      <ContentSection heading="" id="about">
        <Container>
          {this.state.isMounted ? <ProfileImage /> : <EmptyImage />}
          <TextBlock {...this.props} />
        </Container>
      </ContentSection>
    )
  }
}

export default AboutMe
