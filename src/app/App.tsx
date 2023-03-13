import { Suspense, useEffect } from 'react';

import { AppRouter } from 'app/providers/router';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
