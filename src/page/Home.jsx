import React, { Component } from 'react'
import Aux from 'react-aux'

import data from '../data'
import HeroVideo from '../components/HeroVideo'
import EmptyContentSection from '../components/EmptyContectSection'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      isMounted: false,
      about: data.about,
      skills: data.skills,
      projects: data.projects,
      contact: data.contact
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
    return (
      <Aux>
        <AboutMe {...this.state.about} skills={this.state.skills} />
        <Projects projects={this.state.projects} />
        <ContactMe contact={this.state.contact} />
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
