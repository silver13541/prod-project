import { AboutPageLazy } from "pages/AboutPage";
import { MainPageLazy } from "pages/MainPage";
import { RouteProps } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig";

export const routerConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPageLazy />,
  },
  {
    path: RoutePath.about,
    element: <AboutPageLazy />,
  },
];
