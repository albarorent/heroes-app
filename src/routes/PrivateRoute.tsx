import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context";
import { AuthState } from "../interfaces/HeroeInterface";
export const PrivateRoute = () => {
  const { authState } = useAuthContext();
  const { logged } = authState as AuthState;
  
  return logged ? <Outlet/> : <Navigate to="/login" replace/>;
};
