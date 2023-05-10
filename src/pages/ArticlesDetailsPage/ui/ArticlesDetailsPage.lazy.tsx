import { lazy } from 'react';

export const ArticlesDetailsPageLazy = lazy(
    () => new Promise((resolve) => {
    // @ts-ignore
        setTimeout(() => resolve(import('./ArticlesDetailsPage')), 1500);
    }),
);
