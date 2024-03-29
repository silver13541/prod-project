import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarLogo from 'shared/assets/tests/avatar.png';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    args: {
        src: AvatarLogo,
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
};
