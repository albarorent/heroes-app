import { useHeroeContext } from "../context/HeroContext";
import { HeroeItem } from "../components/HeroeItem";

export const Home = () => {
  const { heroes, setHeroes, loading, setLoading } = useHeroeContext();
 
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-5 py-5">
        <HeroeItem
          heroes={heroes}
          setHeroes={setHeroes}
          loading={loading}
          setLoading={setLoading}
        />
        <HeroeItem
          heroes={heroes}
          setHeroes={setHeroes}
          loading={loading}
          setLoading={setLoading}
        />
        <HeroeItem
          heroes={heroes}
          setHeroes={setHeroes}
          loading={loading}
          setLoading={setLoading}
        />
        <HeroeItem
          heroes={heroes}
          setHeroes={setHeroes}
          loading={loading}
          setLoading={setLoading}
        />
        <HeroeItem
          heroes={heroes}
          setHeroes={setHeroes}
          loading={loading}
          setLoading={setLoading}
        />
        <HeroeItem
          heroes={heroes}
          setHeroes={setHeroes}
          loading={loading}
          setLoading={setLoading}
        />
        <HeroeItem
          heroes={heroes}
          setHeroes={setHeroes}
          loading={loading}
          setLoading={setLoading}
        />
        <HeroeItem
          heroes={heroes}
          setHeroes={setHeroes}
          loading={loading}
          setLoading={setLoading}
        />
        <HeroeItem
          heroes={heroes}
          setHeroes={setHeroes}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </>
  );
};
