import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
    [key in StateSchemaKeys]?: Reducer
}

type ReducersListEntry = [StateSchemaKeys, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: PropsWithChildren<DynamicModuleLoaderProps>) => {
    const { children, reducers, removeAfterUnmount = true } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([schemaKey, reducer]: ReducersListEntry) => {
            store.reducerManager.add(schemaKey, reducer);
            dispatch({ type: `@INIT ${schemaKey} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([schemaKey]: ReducersListEntry) => {
                    store.reducerManager.remove(schemaKey);
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
