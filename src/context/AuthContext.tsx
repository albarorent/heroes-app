import { createContext, useContext, useReducer } from "react";
import { AuthContextType } from "../types/typeHeroe";
import { authReducer } from "./AuthReducer";
import { types } from "../auth/types/types";
import { init } from "../helpers/helpers";

const AuthsContext = createContext<AuthContextType | undefined>(undefined);

const initialValue = {
  logged: false,
};

export const useAuthContext = () => {
  const context = useContext(AuthsContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }

  return context;
};

export function AuthProvider({ children }: any) {
  const [authState, dispatch] = useReducer(authReducer, initialValue, init);

  const login = async (name: string = ""): Promise<void> => {
    const user = { id: "ABC", name };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthsContext.Provider value={{ authState, login: login, logout: logout }}>
      {children}
    </AuthsContext.Provider>
  );
}
