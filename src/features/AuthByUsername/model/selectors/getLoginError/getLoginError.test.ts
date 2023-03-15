import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError selector', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };

        expect(getLoginError(state as StateSchema)).toBe('error');
    });

    test('should return default value with empty state', () => {
        const state: DeepPartial<StateSchema> = { };

        expect(getLoginError(state as StateSchema)).toBe(undefined);
    });
});
