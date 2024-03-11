import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "./pages/Home";
import { Heroes } from "./pages/Heroes";
import { Search } from "./pages/Search";
import { HeroeProvider } from "./context/HeroContext";

export const HeroesApp = () => {
  return (
    <>
      <HeroeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </HeroeProvider>
    </>
  );
};
