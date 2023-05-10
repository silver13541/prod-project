import { memo, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

import { AppRoutesProps, routerConfig } from '../config';
import { ProtectedRoute } from './ProtectedRoute';

const renderWithWrapper = (route: AppRoutesProps) => {
    const element = (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">{route.element}</div>

        </Suspense>
    );

    return (
        <Route
            key={route.path}
            path={route.path}
            element={
                route.authOnly
                    ? <ProtectedRoute>{element}</ProtectedRoute>
                    : element
            }
        />
    );
};

export const AppRouter = memo(() => (
    <Routes>
        {Object.values(routerConfig).map(renderWithWrapper)}
    </Routes>
));
