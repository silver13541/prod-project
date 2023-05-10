import { AboutPageLazy } from 'pages/AboutPage';
import { ArticlesDetailsPageLazy } from 'pages/ArticlesDetailsPage';
import { ArticlesPageLazy } from 'pages/ArticlesPage';
import { MainPageLazy } from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import { ProfilePageLazy } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig';

export type AppRoutesProps = RouteProps & {
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
        path: RoutePath.articles,
        element: <ArticlesPageLazy />,
        authOnly: true,
    },
    {
        path: `${RoutePath.articles_details}:id`,
        element: <ArticlesDetailsPageLazy />,
        authOnly: true,
    },

    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
