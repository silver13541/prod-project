import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{
            ...defaultAsyncReducers as ReducersMapObject<StateSchema>,
            ...asyncReducers as ReducersMapObject<StateSchema>,
        }}
    >
        <DynamicModuleLoader reducers={defaultAsyncReducers as ReducersList}>
            <StoryComponent />
        </DynamicModuleLoader>
    </StoreProvider>
);
