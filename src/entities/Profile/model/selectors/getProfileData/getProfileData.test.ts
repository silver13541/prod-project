import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

const data = {
    username: 'username',
    age: 22,
    country: Country.Russia,
    lastname: 'lastname',
    first: 'first',
    city: 'city',
    currency: Currency.RUB,
};

describe('getProfileData selector', () => {
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };

        expect(getProfileData(state as StateSchema)).toBe(data);
    });

    test('should return default value with empty state', () => {
        const state: DeepPartial<StateSchema> = { };

        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
