import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context";
import { AuthState } from "../interfaces/HeroeInterface";
export const PublicRoute = () => {
  const { authState } = useAuthContext();
  const { logged } = authState as AuthState;
  
  return logged ? <Navigate to="/" replace/> : <Outlet/>;
};
