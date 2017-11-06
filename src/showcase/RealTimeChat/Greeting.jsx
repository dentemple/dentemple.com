import React from 'react'
import Sparkle from './Sparkle'

const Greeting = ({ count }) => (
  <p style={{ textAlign: 'center', marginTop: 0 }}>
    <Sparkle />
    Welcome!
    <Sparkle />
  </p>
)

export default Greeting
