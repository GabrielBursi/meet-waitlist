import type { Meta, StoryObj } from '@storybook/react';
import { Main } from '.';

const meta: Meta<typeof Main> = {
	title: 'Main',
	component: Main,
	parameters: {
		layout: 'fullscreen',
	}
}
export default meta

type Story = StoryObj<typeof Main>;

export const Desktop: Story = {
	args: {

	}
}

export const Mobile: Story = {
	args: {

	},
	parameters: {
		viewport: {
			defaultViewport: 'mobile1',
		},
		layout: 'fullscreen'
	}
}
