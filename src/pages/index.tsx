import React from 'react'
import { graphql, PageProps } from 'gatsby'

import { Layout } from '../components'
import { InlineList, Text } from '../components/common'

interface DataProps {
  site: {
    siteMetadata: {
      frontendSkills: Array<string>
      backendSkills: Array<string>
      gamedevSkills: Array<string>
    }
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        frontendSkills
        backendSkills
        gamedevSkills
      }
    }
  }
`

export default function IndexPage({ data }: PageProps<DataProps>) {
  const { frontendSkills, backendSkills, gamedevSkills } = data.site.siteMetadata

  const mapSkill = (skill: string, i: number, arr: Array<string>) => {
    const separator = i < arr.length - 1 ? ', ' : ''
    return <li key={skill}>{`${skill}${separator}`}</li>
  }

  return (
    <Layout>
      <title>Home Page</title>
      <Text as="h2" style={{ marginTop: 2 }}>
        Frontend
      </Text>
      <InlineList>{frontendSkills.map(mapSkill)}</InlineList>
      <Text as="h2">Backend</Text>
      <InlineList>{backendSkills.map(mapSkill)}</InlineList>
      <Text as="h2">Game Dev</Text>
      <InlineList>{gamedevSkills.map(mapSkill)}</InlineList>
    </Layout>
  )
}
