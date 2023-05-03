import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading selector', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: false,
            },
        };

        expect(getProfileIsLoading(state as StateSchema)).toBe(false);
    });

    test('should return default value with empty state', () => {
        const state: DeepPartial<StateSchema> = { };

        expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
    });
});
