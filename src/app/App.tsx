import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";

import "./styles/index.scss";
import { classNames } from "shared/lib/classNames";
import { MainPageLazy } from "pages/MainPage";
import { AboutPageLazy } from "pages/AboutPage";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
