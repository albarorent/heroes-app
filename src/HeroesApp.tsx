import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
// import { Home, Search, Heroe } from "./pages";
import { HeroeProvider } from "./context/HeroContext";
import { LoginPage } from "./auth/pages/LoginPage";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Heroe } from "./pages/Heroe";

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
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </HeroeProvider>
    </>
  );
};
