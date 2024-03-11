import { Heroe } from "../types/typeHeroe";

export interface HeroeItemProps {
  heroes: { [key: string]: Heroe };
  heroeid: string;
  setHeroes: React.Dispatch<React.SetStateAction<any>>;
}

export interface HeroesState {
  [key: string]: Heroe;
}
