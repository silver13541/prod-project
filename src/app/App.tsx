import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared/lib/classNames";
import { AppRouter } from "app/providers/router";

import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <AppRouter />
    </div>
  );
};
