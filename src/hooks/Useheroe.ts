import { useState } from "react";
import axios from "../api/axios";
import { HeroesState } from "../interfaces/HeroeInterface";

export const Useheroe = (setHeroes: any, setLoading: any) => {
  const getHeroes = (name: string) => axios(`${name}`);

  const getMarvelHeroes = async (id: string): Promise<void> => {
    const { data } = await getHeroes(id);

    setHeroes((prevState: HeroesState) => ({
      ...prevState,
      [id]: data,
    }));
    setLoading(false);
  };

  return { getMarvelHeroes };
};

export const useError = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return{
    handleImageError,
    imageError,
    setImageError
  }
}