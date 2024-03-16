import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../context";
import { AuthState } from "../interfaces/HeroeInterface";
export const PrivateRoute = () => {
  const { authState } = useAuthContext();
  const { logged } = authState as AuthState;
  const {pathname} = useLocation();
  
  localStorage.setItem("pathname", pathname);
  
  
  return logged ? <Outlet/> : <Navigate to="/login" replace/>;
};
