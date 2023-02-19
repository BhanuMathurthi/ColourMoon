import React, { createContext, useState, lazy, Suspense } from "react";
const NavBar = lazy(() => import("./Components/Header/Navbar"));
const Routing = lazy(() => import("./Components/Routing/Routing"));
const Carousel = lazy(() => import("./Components/Carousel/Carousel"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Footer2 = lazy(() => import("./Components/Footer/Footer2"));

export const AnimeContext = createContext();

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [everyAnime, setEveryAnime] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const animeContext = {
    loading,
    setLoading,
    searchInput,
    setSearchInput,
    everyAnime,
    setEveryAnime,
    filteredResults,
    setFilteredResults,
  };

  return (
    <AnimeContext.Provider value={animeContext}>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Carousel />
        <Routing />
        <Footer />
        <Footer2 />
      </Suspense>
    </AnimeContext.Provider>
  );
}

export default App;
