import axios from "../api/axios";
import { HeroesState } from "../interfaces/HeroeInterface";

export const Useheroe = (setHeroes: any) => {
  const getHeroes = (name: string) => axios(`${name}`);

  const getMarvelHeroes = async (id: string): Promise<void> => {
    const { data } = await getHeroes(id);

    setHeroes((prevState: HeroesState) => ({
      ...prevState,
      [id]: data,
    }));
  };

  return { getMarvelHeroes };
};
