import axios from "../api/axios";

export const Useheroe = () => {
  const getHeroes = (name: string) => axios(`${name}`);
  return { getHeroes };
};
