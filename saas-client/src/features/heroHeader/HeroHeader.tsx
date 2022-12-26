import { useIntl } from 'react-intl'

import heroImage from 'src/assets/images/hero-image.jpg'
// @ts-ignore
import heroVideoWebm from 'src/assets/videos/hero-video.webm'
// @ts-ignore
import heroVideoMp4 from 'src/assets/videos/hero-video.mp4'
// @ts-ignore
import heroCaptions from 'src/assets/tracks/hero-captions.vtt'

import { BaseStyledComponent, Header, Image, Overlay, Video } from './containers'

export interface HeroHeaderProps extends BaseStyledComponent {
  children: React.ReactNode
}

export function HeroHeader({ children, ...rest }: HeroHeaderProps) {
  const intl = useIntl()
  const imageAltText = intl.formatMessage({ id: 'features.heroHeader.altText' })

  return (
    <Header data-testid='features/heroHeader' {...rest}>
      <Video autoPlay muted loop poster={heroImage}>
        <source src={heroVideoWebm} type='video/webm' />
        <source src={heroVideoMp4} type='video/mp4' />
        <track kind='captions' src={heroCaptions} srcLang='en' />
        <img src={heroImage} alt={imageAltText} />
      </Video>
      <Overlay>{children}</Overlay>
      <Image src={heroImage} alt={imageAltText} />
    </Header>
  )
}

export default HeroHeader
