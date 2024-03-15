import { Link } from "react-router-dom";
import { HeroeIdProps } from "../interfaces/HeroeInterface";
import { memo } from "react";

export const HeroeCard: React.FC<HeroeIdProps> = memo(
  ({ heroes, id, handleImageError, imageError }) => {
    return (
      <>
        <span className="flex items-center justify-center">
          {imageError ? (
            <img
              className="rounded-t-lg w-96 h-96"
              src="heroincongit.jpg"
              alt="Imagen de repuesto"
            />
          ) : (
            <img
              className="rounded-t-lg w-96 h-96"
              src={heroes[id] ? heroes[id]?.image?.url : heroes?.image?.url}
              alt={heroes[id] ? heroes[id]?.name : heroes?.name}
              onError={handleImageError}
            />
          )}
        </span>
        <div className="p-5">
          <span>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {heroes[id] ? heroes[id].name : heroes.name}
            </h5>
          </span>
          <p className="text-slate-100 pb-3">
            {heroes[id]
              ? heroes[id]?.biography?.alignment
              : heroes?.biography?.alignment}
          </p>
          <Link
            to={`/heroe/${id}`}
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
      </>
    );
  }
);
