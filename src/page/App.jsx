import React, { Component } from 'react'
import Aux from 'react-aux'

import data from '../data'
import Showcase from './Showcase'
import HeroVideo from '../components/HeroVideo'
import EmptyContentSection from '../components/EmptyContectSection'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      isMounted: false,
      about: data.about,
      contact: data.contact,
      skills: data.skills,
      showcase: data.showcase
    }
  }
  componentDidMount() {
    const delayInMilliseconds = 800
    setTimeout(() => {
      this.setState({ isMounted: true })
    }, delayInMilliseconds)
  }
  renderEmptyContent() {
    return (
      <Aux>
        <EmptyContentSection />
        <EmptyContentSection />
        <EmptyContentSection />
      </Aux>
    )
  }
  renderFullContent() {
    const { about, skills, contact, showcase } = this.state
    return (
      <Aux>
        <AboutMe {...about} skills={skills} />
        <Showcase showcase={showcase} />
        <ContactMe contact={contact} />
      </Aux>
    )
  }
  render() {
    return (
      <Aux>
        <HeroVideo />
        {this.state.isMounted
          ? this.renderFullContent()
          : this.renderEmptyContent()}
      </Aux>
    )
  }
}

export default Home
