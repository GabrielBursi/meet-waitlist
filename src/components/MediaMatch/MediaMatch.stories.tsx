import type { Meta, StoryObj } from '@storybook/react';
import { MediaMatch } from ".";

const meta: Meta<typeof MediaMatch> ={
    title: 'MediaMatch',
    component: MediaMatch,
}
export default meta

type Story = StoryObj<typeof MediaMatch>;

export const Desktop: Story = {
    args: {
        greaterThan: 'medium'
    },
	render: (args) => (
		<MediaMatch {...args}>
			<h1>Teste</h1>
		</MediaMatch>
	)
}

export const Mobile: Story = {
    args: {
        lessThan: 'medium'
    },
    parameters:{
        viewport: {
            defaultViewport: 'mobile1'
        }
    },
	render: (args) => (
		<MediaMatch {...args}>
			<h1>Teste</h1>
		</MediaMatch>
	)
}
