import React, { Component } from 'react'
import Async from 'react-code-splitting'

import StyledWrapper from './StyledWrapper'
import BackgroundImage from './BackgroundImage'
import Overlay from './Overlay'
import Header from '../Header'
import CallToAction from '../CallToAction'

const BackgroundVideo = () => <Async load={import('./BackgroundVideo')} />

class HeroBackground extends Component {
  constructor() {
    super()
    this.state = {
      isMounted: false
    }
  }
  componentDidMount() {
    const delayInMilliseconds = 1500
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
