import { useEffect, useState } from "react";
import { Useheroe, useImageError } from "../hooks/Useheroe";
import { HeroeItemProps } from "../interfaces/HeroeInterface";
import { HeroeCard } from "./HeroeCard";
export const HeroeItem: React.FC<HeroeItemProps> = ({
  heroes,
  setHeroes,
  loading,
  setLoading,
}) => {
  const { getMarvelHeroes } = Useheroe(setHeroes, setLoading);
  const { handleImageError, imageError } = useImageError();
  const [randomHeroId, setRandomHeroId] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 731) + 1;
    setRandomHeroId(randomId.toString());
    setLoading(true);
    getMarvelHeroes(randomId.toString());
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 drop-shadow-xl">
      {heroes[randomHeroId.toString()] && (
        <HeroeCard
          imageError={imageError}
          handleImageError={handleImageError}
          id={randomHeroId}
          heroes={heroes}
        />
      )}
    </div>
  );
};
