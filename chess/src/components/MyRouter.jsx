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
        return user ? <Navigate to={"/Chess/"} /> : <Outlet />
    }
    const PrivateRoute = () => {
        return user ? <Outlet /> : <Navigate to={"/Chess/login"} />
    }
  return (
    <Router>
      <Routes>
        <Route path="/Chess/" element={<PublicRoute />}>
          {MapRoutes(GetPublicRoutes())}
        </Route>
        <Route path="/Chess/" element={<PrivateRoute />}>
            {MapRoutes(GetPrivateRoutes())}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}
