import React, { createContext, useState } from "react";
import NavBar from "./Components/Header/Navbar";
import Carousel from "./Components/Carousel/Carousel";
import Routing from "./Components/Routing/Routing";
import Footer from "./Components/Footer/Footer";
import Footer2 from "./Components/Footer/Footer2";

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
      <NavBar />
      <Carousel />
      <Routing />
      <Footer />
      <Footer2 />
    </AnimeContext.Provider>
  );
}

export default App;
