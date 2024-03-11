import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home, Search, Heroe } from "./pages";
import { HeroeProvider } from "./context/HeroContext";

export const HeroesApp = () => {
  return (
    <>
      <HeroeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/heroe/:id" element={<Heroe />} />

          </Route>
        </Routes>
      </HeroeProvider>
    </>
  );
};
