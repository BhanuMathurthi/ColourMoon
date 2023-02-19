import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AnimeContext } from "../../App";

export default function SearchAnime() {
  const { everyAnime, setFilteredResults } = useContext(AnimeContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    const input = e.target.value.trim().toLowerCase();
    setSearchInput(input);

    const filteredAnime = everyAnime.filter((anime) =>
      anime.title.toLowerCase().includes(input)
    );

    setFilteredResults(filteredAnime);
  };

  return (
    <nav>
      <form className="input-group search d-flex" style={{ width: "200px" }}>
        <label htmlFor="inp" className="visually-hidden">
          Search Anime
        </label>
        <input
          onChange={handleSearch}
          autoComplete="off"
          type="text"
          className="form-control"
          placeholder="Search Anime..."
          id="inp"
          value={searchInput}
        />
        <button type="button" className="btn btn-dark">
          <FaSearch />
          <span className="visually-hidden">Search</span>
        </button>
      </form>
    </nav>
  );
}
