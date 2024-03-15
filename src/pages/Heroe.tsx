import { Link, Navigate, useParams } from "react-router-dom";
import { useHeroeId } from "../hooks/Useheroe";
import { useEffect } from "react";
import { useHeroeContext } from "../context/HeroContext";

export const Heroe = () => {
  const { heroes, setHeroes, loading, setLoading } = useHeroeContext();
  const { getIdMarvelHeroes } = useHeroeId();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getIdMarvelHeroes(id, setHeroes, setLoading);
  }, [id]);

  if (loading) {
    return <h1>cargando...</h1>;
  }

  if (Object.keys(heroes).length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 py-10 px-10 sm:px-20 items-center justify-center">
      <div>
        <img
          style={{ width: "300px" }}
          src={heroes?.image?.url}
          alt={heroes?.name}
          className="p-2 border border-black"
        />
      </div>
      <div className="flex flex-col gap-2 w-full ">
        <h1 className="text-3xl font-semibold">{heroes?.name}</h1>
        <hr />
        <h2 className="text-2xl font-semibold">Biografia</h2>
        <ul>
          <li>Full Name: {heroes?.biography?.["full-name"]}</li>
          <li>Alignment: {heroes?.biography?.alignment}</li>
          <li>Alter Egos: {heroes?.biography?.["alter-egos"]}</li>
        </ul>
        <hr />
        <div className="p-1">
          <h3 className="text-2xl font-semibold">Power Stats</h3>
          <table
            className="w-full"
            style={{ borderCollapse: "separate", borderSpacing: "10px" }}
          >
            <tbody>
              <tr>
                <td>
                  Combat:{" "}
                  {heroes?.powerstats?.combat == "null"
                    ? 0
                    : heroes?.powerstats?.combat}
                </td>
                <td>
                  Durability:{" "}
                  {heroes?.powerstats?.durability == "null"
                    ? 0
                    : heroes?.powerstats?.durability}
                </td>
                <td>
                  Intelligence:{" "}
                  {heroes?.powerstats?.intelligence == "null"
                    ? 0
                    : heroes?.powerstats?.intelligence}
                </td>
              </tr>
              <tr>
                <td>
                  Power:{" "}
                  {heroes?.powerstats?.power == "null"
                    ? 0
                    : heroes?.powerstats?.power}
                </td>
                <td>
                  Speed:{" "}
                  {heroes?.powerstats?.speed == "null"
                    ? 0
                    : heroes?.powerstats?.speed}
                </td>
                <td>
                  Strength:{" "}
                  {heroes?.powerstats?.strength == "null"
                    ? 0
                    : heroes?.powerstats?.strength}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link
          to="/"
          className="border border-blue-500  text-blue-500 hover:bg-blue-500 hover:text-white w-28 text-center rounded-md"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
};
