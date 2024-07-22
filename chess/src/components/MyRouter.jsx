import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";
import {
  MapRoutes,
  GetPublicRoutes,
  GetPrivateRoutes,
} from "./Routes";
import NotFound from "./NotFound";


export default function MyRouter({ user }) {
    const PublicRoute = () => {
        return user ? <Navigate to={"/"} /> : <Outlet />
    }
    const PrivateRoute = () => {
        return user ? <Outlet /> : <Navigate to={"/login"} />
    }

    const basePath = import.meta.env.VITE_BASE_PATH || "/";

  return (
    <Router basename={basePath}>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          {MapRoutes(GetPublicRoutes())}
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          {MapRoutes(GetPrivateRoutes())}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}
