import React from 'react'
import SocialMediaIcon from './SocialMediaIcon'
import { Twitter, LinkedIn, Medium } from '../icons'

const Subheading = () => (
  <p style={{ margin: '10px 1px' }}>
    <span>Software Developer |</span>
    <span style={{ display: 'inline-block' }}>
      <SocialMediaIcon
        description="Twitter"
        component={<Twitter />}
        link="https://twitter.com/dentemple"
      />
      <SocialMediaIcon
        description="LinkedIn"
        component={<LinkedIn />}
        link="https://www.linkedin.com/in/dentemple/"
      />
      <SocialMediaIcon
        description="Medium"
        component={<Medium />}
        link="https://medium.com/@dentemple"
      />
    </span>
  </p>
)

export default Subheading
