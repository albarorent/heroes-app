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

export const useHeroeId = () => {
  const getIdHeroes = (id: string | undefined) => axios(`${id}`);
  const getIdMarvelHeroes = async (
    id: string | undefined,
    setHeroes: any,
    setLoading: any
  ) => {
    const { data } = await getIdHeroes(id);

    if (data.response === "error") {
      setHeroes({});
      setLoading(false);
    } else {
      setHeroes(data);
      setLoading(false);
    }
  };

  return { getIdMarvelHeroes };
};

export const useHeroeSearch = (setHeroes: any) => {
  const getSearchHeroe = (name: string) => axios(`/search/${name}`);
  const getSearchMarvel = async (name: string) => {
    const { data } = await getSearchHeroe(name);
    setHeroes(data);
  };

  return {
    getSearchMarvel,
  };
};

export const useImageError = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return {
    handleImageError,
    imageError,
    setImageError,
  };
};
