import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { MapRoutes, GetPublicRoutes, GetPrivateRoutes } from "./Routes";
import NotFound from "./NotFound";
import HomePage from "./HomePage";
import Board from "./Board";
import { useSelector } from "react-redux";
import OfflineTemplate from "./OfflineTemplate";

export default function MyRouter() {
  const { user } = useSelector((state) => state.user);

  const PublicRoute = () => {
    return user ? <Navigate to={"/"} /> : <Outlet />;
  };
  const PrivateRoute = () => {
    return user ? <Outlet /> : <Navigate to={"/login"} />;
  };

  const basePath = import.meta.env.VITE_BASE_PATH || "/";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          {/* The routes that should only be reached by UN-Authenticated users */}
          {MapRoutes(GetPublicRoutes())}
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          {/* The routes that should only be reached by Authenticated users */}
          {MapRoutes(GetPrivateRoutes())}
        </Route>
        {/* Routes that are open to everyone */}
        <Route index element={<HomePage />} />
        <Route path="/offline" element={<OfflineTemplate />} />
        <Route path="/testing" element={<OfflineTemplate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
