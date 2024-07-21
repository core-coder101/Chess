import React from "react";
import {Route} from "react-router-dom";
import Board from "./Board";
import Login from "./Login";

const AllRoutes = [
  {
    path: "",
    component:  <Board />,
    type: "Private",
    authentication: "role",
    default: true,
  },
  {
    path: "login",
    component:  <Login />,
    type: "Public",
    authentication: "role",
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

export const GetUserTemplate = () => {
  const { user, roles } = useSelector((state) => state.auth);
  if (!user) {
    return;
  } else if (roles.includes(user.Role)) {
    const filteredTemplateArr = AllTemplates.filter(
      (template) => template.type == user.Role
    );
    return filteredTemplateArr[0].component;
  }
};
