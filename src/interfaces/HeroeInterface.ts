import { Heroe, UserType } from "../types/typeHeroe";

export interface HeroeItemProps {
  heroes: { [key: string]: Heroe };
  setHeroes: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<any>>;
}

export interface HeroeIdProps {
  heroes: { [key: string]: Heroe } | any;
  id: string;
  handleImageError: React.ReactEventHandler<HTMLImageElement> | undefined;
  imageError: boolean;
}

export interface HeroesState {
  [key: string]: Heroe;
}

export interface AuthState {
  user: UserType; // UserType es el tipo de datos del usuario
  logged:boolean
}