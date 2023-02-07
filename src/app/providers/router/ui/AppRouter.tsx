import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routerConfig } from "../config";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routerConfig.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};