import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `dentemple.com`,
    siteUrl: `https://dentemple.com`,
    repo: `https://github.com/dentemple/dentemple.com`,
    selfName: 'Denny S. Temple',
    selfLocation: 'Philadelphia, PA USA',
    selfTitle: 'Senior Software Engineer',
    frontendSkills: [
      'React',
      'Typescript',
      'Javascript ES6+',
      'GraphQL',
      'Redux',
      'HTML5',
      'CSS',
      'Flexbox',
      'Jest',
      'Headless CMS',
      'Atomic Design',
    ],
    backendSkills: [
      'Python',
      'Django',
      'C#',
      'PostgreSQL/SQL',
      'MongoDB/NoSQL',
      'Heroku',
      'AWS',
      'Visual Basic/VBA',
      'Bash/Linux',
      'REST Architecture',
    ],
    gamedevSkills: ['C++', 'Blueprints', 'Unreal Engine'],
    githubUrl: 'https://github.com/dentemple',
    linkedinUrl: 'https://www.linkedin.com/in/dentemple/',
    twitterUrl: 'https://twitter.com/dentemple',
    jobs: [
      {
        name: 'Derivco Sports',
        jobTitle: 'Software Engineer',
        tag: 'Online Gaming Consulting',
        url: 'https://derivco.com/',
        location: 'Remote (UK)',
        startDate: 'Apr 2022',
        endDate: undefined,
      },
      {
        name: 'Cheddar News',
        jobTitle: 'Senior Software Engineer',
        tag: 'Digital Media',
        location: 'Remote (NYC)',
        startDate: 'Aug 2021',
        endDate: 'Mar 2022',
      },
      {
        name: 'Ethyca',
        tag: 'Data Privacy Automation',
        location: 'NYC',
        jobTitle: 'Senior Software Engineer',
        startDate: 'Mar 2020',
        endDate: 'Jul 2021',
      },
      {
        name: 'BentoBox',
        tag: 'Hospitality Industry Websites',
        location: 'NYC',
        jobTitle: 'Software Engineer',
        startDate: 'Jul 2019',
        endDate: 'Jan 2020',
      },
      {
        name: 'InRhythm',
        tag: 'Financial Industry Consulting',
        location: 'NYC',
        jobTitle: 'Senior Software Engineer',
        startDate: 'Jul 2019',
        endDate: 'Jan 2020',
      },
      {
        name: 'NetDriven',
        tag: 'Automotive Industry Websites',
        location: 'PA',
        jobTitle: 'Frontend Developer',
        startDate: 'Dec 2017',
        endDate: 'Dec 2018',
      },
      {
        name: 'Den Temple Engineering',
        tag: 'Freelance/Self-Employed',
        location: 'Remote (PA)',
        jobTitle: 'Fullstack Engineer',
        startDate: 'Jan 2017',
        endDate: 'Dec 2017',
      },
      {
        name: 'Penn Foster',
        tag: 'Distance Education',
        location: 'PA',
        jobTitle: 'Junior Data Engineer',
        startDate: '2014',
        endDate: 'Jun 2017',
      },
    ],
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
