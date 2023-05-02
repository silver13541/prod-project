import { AboutPageLazy } from 'pages/AboutPage';
import { MainPageLazy } from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import { ProfilePageLazy } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig';

type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export const routerConfig: AppRoutesProps[] = [
    {
        path: RoutePath.main,
        element: <MainPageLazy />,
    },
    {
        path: RoutePath.about,
        element: <AboutPageLazy />,
    },
    {
        path: RoutePath.profile,
        element: <ProfilePageLazy />,
        authOnly: true,
    },

    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
