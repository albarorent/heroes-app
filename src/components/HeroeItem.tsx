import { useEffect } from "react";
import { Useheroe } from "../hooks/Useheroe";
import { HeroeItemProps, HeroesState } from "../interfaces/HeroeInterface";
import { Link } from "react-router-dom";

export const HeroeItem: React.FC<HeroeItemProps> = ({
  heroes,
  heroeid,
  setHeroes,
}) => {
  const { getHeroes } = Useheroe();

  const getMarvelHeroes = async (id: string): Promise<void> => {
    const { data } = await getHeroes(id);
    console.log(data);

    setHeroes((prevState: HeroesState) => ({
      ...prevState,
      [id]: data,
    }));
  };

  useEffect(() => {
    getMarvelHeroes(heroeid);
  }, []);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <span className="flex items-center justify-center">
        <img
          className="rounded-t-lg w-96 "
          src={heroes[heroeid]?.image?.url}
          alt={heroes[heroeid]?.name}
        />
      </span>
      <div className="p-5">
        <span>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {heroes[heroeid]?.name}
          </h5>
        </span>

        <Link
          to={`heroe/${heroeid}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
