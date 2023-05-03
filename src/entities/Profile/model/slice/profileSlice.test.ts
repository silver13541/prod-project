import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData';
import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'username',
    age: 22,
    country: Country.Russia,
    lastname: 'lastname',
    first: 'first',
    city: 'city',
    currency: Currency.RUB,
};

describe('profileSlice', () => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });

    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            data,
            form: undefined,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                data,
                form: data,
            });
    });

    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { city: '345' },
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ city: '123' }),
            ),
        ).toEqual({ form: { city: '123' } });
    });

    test('updateProfileData.pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            error: '123',
            isLoading: false,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.pending,
            ),
        ).toEqual({ error: undefined, isLoading: true });
    });

    test('updateProfileData.fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            readonly: false,
            data: undefined,
            form: undefined,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            readonly: true,
            isLoading: false,
            data,
            form: data,
        });
    });
});
