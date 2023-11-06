import type { Meta, StoryObj } from '@storybook/react';
import { Svg } from ".";

const meta: Meta<typeof Svg> ={
    title: 'Svg',
    component: Svg,
}
export default meta

type Story = StoryObj<typeof Svg>;

export const Basic: Story = {
    args: {

    }
}
