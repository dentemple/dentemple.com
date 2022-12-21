import { useIntl } from 'react-intl'

import heroVideoWebm from 'src/assets/videos/hero-video.webm'
import heroVideoMp4 from 'src/assets/videos/hero-video.mp4'
import heroCaptions from 'src/assets/tracks/hero-captions.vtt'
import heroImage from 'src/assets/img/hero-image.jpg'

import { BaseStyledComponent, Header, Image, Overlay, Video } from './containers'

export interface HeroHeaderProps extends BaseStyledComponent {
  children: React.ReactNode
}

export function HeroHeader({ children, ...rest }: HeroHeaderProps) {
  const intl = useIntl()
  const imageAltText = intl.formatMessage({ id: 'features.heroHeader.altText' })

  return (
    <Header data-testId='features/heroHeader' {...rest}>
      <Video autoPlay muted loop poster={heroImage} data-testId='features/heroHeader/video'>
        <source src={heroVideoWebm} type='video/webm' />
        <source src={heroVideoMp4} type='video/mp4' />
        <track kind='captions' src={heroCaptions} srcLang='en' />
        <img src={heroImage} alt={imageAltText} />
      </Video>
      <Overlay>{children}</Overlay>
      <Image src={heroImage} alt={imageAltText} data-testId='features/heroHeader/image' />
    </Header>
  )
}

export default HeroHeader
