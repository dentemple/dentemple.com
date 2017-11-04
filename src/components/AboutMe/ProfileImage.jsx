import React from 'react'
import Avatar from 'material-ui/Avatar'

import image from './profile.jpg'
import AnimateContents from '../AnimateContents'

const ProfileImage = () => {
  const pixels = 250
  return (
    <AnimateContents>
      <Avatar src={image} size={pixels} style={{ margin: '20px 30px' }} />
    </AnimateContents>
  )
}

export default ProfileImage
