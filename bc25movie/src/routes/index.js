import { Route } from "react-router-dom";

import { lazy } from "react";
const routes = [
  {
    path: "",
    element: lazy(() => import("../containers/HomeTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("../containers/HomeTemplate/HomePage")),
      },
      {
        path: "about",
        element: lazy(() => import("../containers/HomeTemplate/AboutPage")),
      },
      {
        path: "list-movie",
        element: lazy(() => import("../containers/HomeTemplate/ListMoviePage")),
      },
      {
        path: "hooks",
        element: lazy(() => import("../containers/HomeTemplate/HooksPage")),
      },
      {
        path: "hoc",
        element: lazy(() => import("../containers/HomeTemplate/HocPage")),
      },
      {
        path: "/detail/:id",
        element: lazy(() => import("../containers/HomeTemplate/DetailMovie")),
      },
    ],
  },
  {
    path: "admin",
    element: lazy(() => import("../containers/AdminTemplate")),
    nested: [
      {
        path: "dashboard",
        element: lazy(() =>
          import("../containers/AdminTemplate/DashboardPage")
        ),
      },
      {
        path: "add-user",
        element: lazy(() => import("../containers/AdminTemplate/AddUserPage")),
      },
      {
        path: "add-movie",
        element: lazy(() => import("../containers/AdminTemplate/AddMoviePage")),
      },
    ],
  },
  {
    path: "auth",
    element: lazy(() => import("../containers/AdminTemplate/AuthPage")),
  },
];

const renderRoutes = () => {
  return routes.map((item) => {
    if (item.nested) {
      return (
        <Route key={item.path} path={item.path} element={<item.element />}>
          {item.nested.map((item2) => {
            return (
              <Route
                key={item2.path}
                path={item2.path}
                element={<item2.element />}
              />
            );
          })}
        </Route>
      );
    } else {
      return <Route path={item.path} element={<item.element />} />;
    }
  });
};

export { renderRoutes };
