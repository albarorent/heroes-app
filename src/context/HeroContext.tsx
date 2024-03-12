import { createContext, useContext, useState } from "react";
import { HeroeContextType } from "../types/typeHeroe";
import { HeroesState } from "../interfaces/HeroeInterface";

const HeroeContext = createContext<HeroeContextType | undefined>(undefined);

export const useHeroeContext = () => {
  const context = useContext(HeroeContext);
  if (!context) {
    throw new Error("useHeroeContext must be used within a HeroeProvider");
  }

  return context;
};

export function HeroeProvider ({children}:any){
    const [heroes, setHeroes] = useState<HeroesState>({});
    const [loading, setLoading] = useState(true);

    return(
        <HeroeContext.Provider value={{heroes, setHeroes, loading, setLoading}}>
            {children}
        </HeroeContext.Provider>
    )
}
