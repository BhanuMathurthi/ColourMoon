import { useContext, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimeContext } from "../../App.js";
import AnimeCard from "./AnimeCard";
import FilterAnimes from "./FilterAnimes";
import LoadMore from "./LoadMore";

const API_URL = "https://api.jikan.moe/v4/anime";
const ANIMES_PER_PAGE = 4;

export default function RenderAnimes() {
  const { searchInput, everyAnime, setEveryAnime, filteredResults } =
    useContext(AnimeContext);

  const [filterBasedOnGenre, setFilterBasedOnGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function fetchAnimes() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        setEveryAnime(result.data);
        setFilterBasedOnGenre(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAnimes();
  }, [setEveryAnime, setFilterBasedOnGenre, setIsLoading]);

  const animeList =
    searchInput.length > 1 ? filteredResults : filterBasedOnGenre;
  const startIndex = currentPage * ANIMES_PER_PAGE;
  const endIndex = startIndex + ANIMES_PER_PAGE;
  const slicedAnimeList = animeList.slice(startIndex, endIndex);

  function handlePreviousClick() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 0));
  }

  function handleNextClick() {
    const maxPage = Math.ceil(animeList.length / ANIMES_PER_PAGE) - 1;
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  return (
    <>
      <FilterAnimes
        everyAnime={everyAnime}
        setFilterBasedOnGenre={setFilterBasedOnGenre}
      />
      <main role="main" className="container">
        <section className="row align-items-center">
          <div className="col-md-6">
            <h2 className="text-primary fs-4">
              <strong>POPULAR ANIME'S</strong>
            </h2>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end my-2">
              <button
                className="btn btn-dark rounded-circle me-2"
                disabled={currentPage === 0}
                onClick={handlePreviousClick}
              >
                <FaChevronLeft />
              </button>
              <button
                className="btn btn-dark rounded-circle"
                disabled={
                  currentPage ===
                  Math.ceil(animeList.length / ANIMES_PER_PAGE) - 1
                }
                onClick={handleNextClick}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </section>

        <section className="row justify-content-center align-items-center">
          {isLoading ? (
            <h2 className="text-success fw-bold text-center my-5">
              Loading...
            </h2>
          ) : slicedAnimeList.length > 0 ? (
            slicedAnimeList.map((data) => (
              <AnimeCard key={data.mal_id} data={data} />
            ))
          ) : (
            <h2 className="text-danger fw-bold text-center my-5">
              No results found.
            </h2>
          )}
        </section>

        <LoadMore />
      </main>
    </>
  );
}
