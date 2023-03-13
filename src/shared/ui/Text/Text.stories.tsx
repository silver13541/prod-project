import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { TextTheme } from '.';
import { Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    args: {
        children: 'Text',
        to: '/',
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Description',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Description',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Description',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
