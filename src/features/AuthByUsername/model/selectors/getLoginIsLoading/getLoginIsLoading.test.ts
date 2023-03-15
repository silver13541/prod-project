import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading selector', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };

        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });

    test('should return default value with empty state', () => {
        const state: DeepPartial<StateSchema> = { };

        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});
