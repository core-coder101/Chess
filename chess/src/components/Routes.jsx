import React from "react";
import { Route } from "react-router-dom";
import Board from "./Board";
import Login from "./Login";
import HomePage from "./HomePage";
import Queue from "./Queue";
import Online from "./Online";

const AllRoutes = [
  // {
  //   path: "",
  //   component:  <HomePage />,
  //   type: "Public",
  //   default: true,
  // },
  // {
  //   path: "offline",
  //   component:  <Board />,
  //   type: "Public",
  // },
  {
    path: "login",
    component: <Login />,
    type: "Public",
  },
  {
    path: "queue",
    component: <Queue />,
    type: "Private",
    exact: true,
  },
  {
    path: "online/:ID",
    component: <Online />,
    type: "Private",
  },
];

export const GetPrivateRoutes = () => {
  const filtered = AllRoutes.filter((route) => {
    return route.type === "Private";
  });
  return filtered;
};

export const GetPublicRoutes = () => {
  const filtered = AllRoutes.filter((route) => {
    return route.type == "Public";
  });
  return filtered;
};

export const MapRoutes = (routes) => {
  if (Array.isArray(routes) && routes.length > 0) {
    // console.log("routes: ", routes);
    return routes.map((route, index) => {
      if (route.default) {
        return <Route index key={index} element={route.component} />;
      } else {
        return (
          <Route key={index} path={route.path} element={route.component} />
        );
      }
    });
  } else {
    return <></>;
  }
};
