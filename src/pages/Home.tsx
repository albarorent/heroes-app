import { useHeroeContext } from "../context/HeroContext";
import { HeroeItem } from "../components/HeroeItem";

export const Home = () => {
  const { heroes, setHeroes } = useHeroeContext();

  return (
    <>
      <h1>Home</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3  gap-5 py-5">
        <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`273`} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`2`} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`3`} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`4`} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`5`} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`6`} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`9`} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`8`} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`115`} />

      </div>
    </>
  );
};
