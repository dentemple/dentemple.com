import React, { Component } from 'react'

import StyledWrapper from './StyledWrapper'
import BackgroundVideo from './BackgroundVideo'
import BackgroundImage from './BackgroundImage'
import Overlay from './Overlay'
import Header from '../Header'
import CallToAction from '../CallToAction'

class HeroBackground extends Component {
  constructor() {
    super()
    this.state = {
      isMounted: false
    }
  }
  componentDidMount() {
    const delayInMilliseconds = 1000
    setTimeout(() => {
      this.setState({ isMounted: true })
    }, delayInMilliseconds)
  }
  render() {
    return (
      <StyledWrapper id="home">
        {this.state.isMounted ? <BackgroundVideo /> : <BackgroundImage />}
        <Overlay />
        <Header />
        <CallToAction />
      </StyledWrapper>
    )
  }
}

export default HeroBackground
