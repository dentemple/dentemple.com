import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `dentemple.com`,
    siteUrl: `https://dentemple.com`,
    repo: `https://github.com/dentemple/dentemple.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '323964392',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/owl.jpg',
      },
    },
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: './src/images/favicon.ico',
        appName: 'dentemple',
        background: '#fff',
        icons: {
          favicons: true,
        },
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}

export default config
