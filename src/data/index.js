import asyncComponent from '../util/AsyncComponent'

const data = {
  about: {
    location: 'Scranton, PA',
    position: 'Freelance',
    sinceDate: '2017',
    blurb: 'Web • Mobile',
    description:
      'An app developer specializing in cross-platform Javascript. Former Analyst Programmer for Penn Foster Schools.'
  },
  contact: {
    phone: '',
    email: 'developer@dentemple.com'
  },
  skills: [
    'Javascript ES6+',
    'React/React Native',
    'NativeScript',
    'Node.js',
    'Material Design',
    'Python',
    'Machine Learning',
    'Agile/Scrum',
    'Github'
  ],
  showcase: [
    {
      url: '/chat',
      label: 'Real-time Chat',
      component: asyncComponent(() => import('../showcase/RealTimeChat'))
    },
    {
      url: '/quote',
      label: 'Random Quote Generator',
      component: asyncComponent(() => import('../showcase/QuoteGenerator'))
    },
    {
      url: '/tictactoe',
      label: 'Tic Tac Toe Game',
      component: asyncComponent(() => import('../showcase/TicTacToe'))
    },
    {
      url: '/calculator',
      label: 'Electronic Calculator',
      component: asyncComponent(() =>
        import('../showcase/ElectronicCalculator')
      )
    },
    {
      url: '/wikipedia',
      label: 'WikipediaAPI',
      component: asyncComponent(() => import('../showcase/WikipediaAPI'))
    }
  ]
}

export default data
