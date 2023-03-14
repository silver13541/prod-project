import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{
            ...defaultAsyncReducers as ReducersMapObject<StateSchema>,
            ...asyncReducers as ReducersMapObject<StateSchema>,
        }}
    >
        <DynamicModuleLoader reducers={defaultAsyncReducers as ReducersMapObject<StateSchema>}>
            <StoryComponent />
        </DynamicModuleLoader>
    </StoreProvider>
);
