import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

const form = {
    username: 'username',
    age: 22,
    country: Country.Russia,
    lastname: 'lastname',
    first: 'first',
    city: 'city',
    currency: Currency.RUB,
};

describe('getProfileForm selector', () => {
    test('should return form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };

        expect(getProfileForm(state as StateSchema)).toBe(form);
    });

    test('should return default value with empty state', () => {
        const state: DeepPartial<StateSchema> = { };

        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});
