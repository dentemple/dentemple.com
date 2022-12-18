import { ComponentStory, ComponentMeta } from '@storybook/react'

import Test from './Page'

export default {
  title: 'components/atoms/Page',
  component: Test,
  parameters: {},
} as ComponentMeta<typeof Test>

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />

export const Default = Template.bind({})
Default.args = { children: 'Lorem ipsum' }
