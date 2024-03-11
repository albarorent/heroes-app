import { useHeroeContext } from "../context/HeroContext";
import { HeroeItem } from "../components/HeroeItem";

export const Home = () => {
  const { heroes, setHeroes } = useHeroeContext();

  return (
    <>
      <h1>Home</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-5 py-5">
        <HeroeItem heroes={heroes} setHeroes={setHeroes} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} />
        <HeroeItem heroes={heroes} setHeroes={setHeroes} />
      </div>
      /{" "}
    </>
  );
};
