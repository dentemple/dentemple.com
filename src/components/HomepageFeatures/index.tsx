import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

import IconSde from '@site/static/img/icon_sde.png'
import IconTech from '@site/static/img/icon_tech.png'
import IconHire from '@site/static/img/icon_hire.png'

type FeatureItem = {
  title: string
  img: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Software Development Engineer (SDE)',
    img: IconSde,
    description: (
      <>
        An experienced SDE with a passion for building and maintaining software.{' '}
        <em>Fast, safe,</em> and <em>reliable code</em> is a primary goal.
      </>
    ),
  },
  {
    title: 'Cutting Edge Technology',
    img: IconTech,
    description: (
      <>
        Specialized in the latest technologies used by top companies, including <em>AWS</em>,{' '}
        <em>React</em>, and
        <em>TypeScript</em>.
      </>
    ),
  },
  {
    title: 'Available for Hire (USA)',
    img: IconHire,
    description: (
      <>
        <em>Full-time</em> or <em>Contract</em> roles, with <em>Webcam On</em> availability within
        the Eastern US Timezone. Contact through{' '}
        <a href='https://www.linkedin.com/in/dentemple'>LinkedIn</a> today.{' '}
      </>
    ),
  },
]

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center padding-spacer--bottom'>
        <img className={styles.featureImg} src={img} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
