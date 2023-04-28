import { PropsWithChildren, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from 'shared/hooks';

export type ReducersList = {
    [key in StateSchemaKeys]?: Reducer
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: PropsWithChildren<DynamicModuleLoaderProps>) => {
    const { children, reducers, removeAfterUnmount = true } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([schemaKey, reducer]) => {
            store.reducerManager.add(schemaKey as StateSchemaKeys, reducer);
            dispatch({ type: `@INIT ${schemaKey} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([schemaKey]) => {
                    store.reducerManager.remove(schemaKey as StateSchemaKeys);
                    dispatch({ type: `@DESTROY ${schemaKey} reducer` });
                });
            }
        };
    }, []);

    return (
        <>
            { children }
        </>
    );
};
