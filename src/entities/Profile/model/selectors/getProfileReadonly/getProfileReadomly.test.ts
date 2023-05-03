import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly selector', () => {
    test('should return readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false,
            },
        };

        expect(getProfileReadonly(state as StateSchema)).toBe(false);
    });

    test('should return default value with empty state', () => {
        const state: DeepPartial<StateSchema> = { };

        expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
    });
});
