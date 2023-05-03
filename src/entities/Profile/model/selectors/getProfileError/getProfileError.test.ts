import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError selector', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123',
            },
        };

        expect(getProfileError(state as StateSchema)).toBe('123');
    });

    test('should return default value with empty state', () => {
        const state: DeepPartial<StateSchema> = { };

        expect(getProfileError(state as StateSchema)).toBe(undefined);
    });
});
