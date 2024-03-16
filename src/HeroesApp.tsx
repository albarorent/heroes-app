import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home, Search, Heroe } from "./pages";
import { LoginPage } from "./auth/pages/LoginPage";
import { AuthProvider, HeroeProvider } from "./context/";
import { PrivateRoute, PublicRoute } from "./routes/";

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <HeroeProvider>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/heroe/:id" element={<Heroe />} />
              </Route>
            </Route>
            <Route
              path="*"
              element={
                <>
                  <h1>Error 404</h1>
                </>
              }
            />
          </Routes>
        </HeroeProvider>
      </AuthProvider>
    </>
  );
};
