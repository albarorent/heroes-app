import { useHeroeSearch, useImageError } from "../hooks/Useheroe";
import { useHeroeContext } from "../context/HeroContext";
import { HeroeCard } from "../components/HeroeCard";
import { Heroe } from "../types/typeHeroe";
import { useForm } from "../hooks/UseForm";
import { FormEvent } from "react";




export const Search = () => {
  const { heroes, setHeroes } = useHeroeContext();
  const { handleImageError, imageError } = useImageError();
  const { formState, onInputChange } = useForm({ searchHeroe: "" });
  const { searchHeroe } = formState;
  const { getSearchMarvel } = useHeroeSearch(setHeroes);

  const onSearchSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (searchHeroe.trim().length <= 2) return;

    getSearchMarvel(searchHeroe);
  };

  return (
    <div className="flex  flex-col md:flex-row">
      <div className="py-10 pr-10 md:px-20">
        <h1 className="text-3xl pb-3">Search Heroe</h1>
        <hr />
        <form onSubmit={onSearchSubmit}>
          <input
            type="text"
            name="searchHeroe"
            placeholder="Ingresa un heroe"
            className="mt-2 border border-slate-300 rounded-sm p-1 w-72"
            onChange={onInputChange}
            value={searchHeroe}
          />
          <button className="bg-teal-500 w-72 mt-2 rounded-sm p-2 text-slate-200 hover:bg-slate-50 hover:text-teal-500 hover:border border-teal-500">
            Search
          </button>
        </form>
      </div>
      <div className="py-10 w-full md:pr-20">
        <h1 className="text-3xl pb-3">Resultado</h1>
        <hr />
        {heroes.results ? (
          <>
            {heroes?.results?.map((heroe: Heroe) => (
              <div
                className="max-w-sm mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 drop-shadow-xl"
                key={heroe.id}
              >
                <HeroeCard
                  heroes={heroe}
                  id={heroe.id}
                  imageError={imageError}
                  handleImageError={handleImageError}
                />
              </div>
            ))}
          </>
        ) : (
          <div
            className="mt-3 p-4 text-yellow-800"
            style={{ backgroundColor: "#fff3cd" }}
          >
            No data Found
          </div>
        )}
      </div>
    </div>
  );
};
