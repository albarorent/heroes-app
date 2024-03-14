import { createContext, useContext, useState } from "react";
import { AuthContextType } from "../types/typeHeroe";

const AuthsContext = createContext<AuthContextType| undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthsContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }

  return context;
};


export function AuthProvider ({children}:any){
    const [user, setUser] = useState({})

    return(
        <AuthsContext.Provider value={{user,setUser}}>
            {children}
        </AuthsContext.Provider>
    )
}
