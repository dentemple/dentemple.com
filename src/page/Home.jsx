import React from 'react'
import Aux from 'react-aux'

import RaisedButton from 'material-ui/RaisedButton'
import HeroVideo from '../components/HeroVideo'

const Home = () => (
  <Aux>
    <HeroVideo />
    <h2>Website</h2>
    <p>Lorem ipsum</p>
    <RaisedButton
      href="https://github.com/dentemple"
      label="Github Link"
      secondary={true}
    />
  </Aux>
)

export default Home
