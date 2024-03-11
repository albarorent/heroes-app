import { useHeroeContext } from "../context/HeroContext";
import { HeroeItem } from "../components/HeroeItem";

export const Home = () => {
  const { heroes, setHeroes } = useHeroeContext();

  return (
    <>
      <h1>Home</h1>

      <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`273`} />
      <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`2`} />
      <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`3`} /> 
      <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`4`} /> 
      <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`5`} /> 
      <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`6`} /> 
      <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`9`} /> 
      <HeroeItem heroes={heroes} setHeroes={setHeroes} heroeid={`8`} /> 
    </>
  );
};
