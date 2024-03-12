export type Heroe = {
  id: string;
  name: string;
  powerstats: {
    combat: string;
    durability: string;
    intelligence: string;
    power: string;
    speed: string;
    strength: string;
  };
  work: {
    base: string;
    occupation: string;
  };
  image: {
    url: string;
  };
  biography: {
    alignment: string;
  };
};

export type HeroeContextType = {
  heroes: any;
  setHeroes: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
  setLoading:React.Dispatch<React.SetStateAction<any>>;
};
