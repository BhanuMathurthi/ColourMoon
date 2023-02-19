import { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { AnimeContext } from "../../App";
import AnimeCard from "./AnimeCard";

const API_URL = "https://api.jikan.moe/v4/anime";

export default function LoadMore() {
  const [filterBasedOnGenre, setFilterBasedOnGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [numRows, setNumRows] = useState(1); // state variable to track number of rows
  const { searchInput, setEveryAnime, filteredResults } =
    useContext(AnimeContext);

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

  // Get the list of animes based on searchInput or filterBasedOnGenre
  const animeList =
    searchInput.length > 1 ? filteredResults : filterBasedOnGenre;

  // Calculate starting and ending index of the new row
  const startIndex = (numRows - 1) * 4;
  const endIndex = startIndex + 4;

  // Handle load more button click
  const handleLoadMore = () => {
    setNumRows(numRows + 1); // Increment number of rows on button click
  };

  return (
    <main>
      <section className="latest-animes mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10">
              <h2 className="text-primary fs-3">
                <strong>Latest Animes</strong>
              </h2>
            </div>
            <div className="col-md-2">
              <div className="d-flex justify-content-end my-2">
                <button className="btn text-primary" onClick={handleLoadMore}>
                  <strong>More</strong> <FaPlus style={{ fontSize: "8px" }} />
                </button>
              </div>
            </div>
          </div>
          {Array.from({ length: numRows }, (_, index) => {
            const rowStartIndex = index * 4;
            const rowEndIndex = rowStartIndex + 4;
            return (
              <div
                className="row d-flex justify-content-center align-items-center"
                key={index}
              >
                {/* Render the anime cards within the new row */}
                {isLoading ? (
                  <h2 className="text-success fw-bold text-center my-5">
                    Loading...
                  </h2>
                ) : (
                  animeList
                    .slice(rowStartIndex, rowEndIndex)
                    .map((data) => <AnimeCard key={data.mal_id} data={data} />)
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
