import axios from './axios';

export const getHeroes = (name:string) => axios(`${name}`);
