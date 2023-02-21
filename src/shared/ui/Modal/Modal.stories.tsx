import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nobis, deleniti culpa rerum tempora illo delectus veniam voluptatibus quas itaque, quis facere dignissimos blanditiis rem velit consequatur sequi. Expedita, nulla',
        isOpen: true,
    },
} as ComponentMeta<typeof Modal>;
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
