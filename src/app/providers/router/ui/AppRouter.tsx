import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

import { routerConfig } from '../config';

export function AppRouter() {
    return (
        <Routes>
            {routerConfig.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
}
