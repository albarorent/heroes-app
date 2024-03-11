import { useEffect, useState } from "react";
import { getHeroes } from "../api/heroes";
import { Heroe } from "../types/typeHeroe";

export const Home = () => {
  const [heroes, setHeroes] = useState([]);

  const getMarvelHeroes = async ():Promise<void> => {
    const { data } = await getHeroes("batman");
    setHeroes(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    getMarvelHeroes();
  }, []);

  return (
    <>
      <h1>Home</h1>
      {heroes.map((heroe: Heroe) => (
        <div key={heroe.id}>
          <h1>{heroe.name}</h1>
          <img src={heroe.image.url} alt={heroe.name} />
        </div>
      ))}
    </>
  );
};
