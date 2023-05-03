import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {
};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'username',
            age: 22,
            country: Country.Russia,
            lastname: 'lastname',
            first: 'first',
            city: 'city',
            currency: Currency.RUB,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'username',
            age: 22,
            country: Country.Russia,
            lastname: 'lastname',
            first: 'first',
            city: 'city',
            currency: Currency.RUB,
        },
    },
})];
