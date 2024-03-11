import { useEffect } from "react";
import { getHeroes } from "../api/heroes";
import { HeroeItemProps, HeroesState } from "../interfaces/HeroeInterface";

export const HeroeItem: React.FC<HeroeItemProps> = ({
  heroes,
  heroeid,
  setHeroes,
}) => {
  const getMarvelHeroes = async (id: string): Promise<void> => {
    const { data } = await getHeroes(id);
    setHeroes((prevState: HeroesState) => ({
      ...prevState,
      [id]: data,
    }));
  };

  useEffect(() => {
    getMarvelHeroes(heroeid);
  }, []);

  return (
    <div>
      <h1>{heroes[heroeid]?.name}</h1>
      <h1>{heroes[heroeid]?.id}</h1>

      <img src={heroes[heroeid]?.image?.url} alt={heroes[heroeid]?.name} />
    </div>
  );
};
