import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";

const genreButtons = [
  { id: 0, label: "All" },
  { id: 7, label: "Mystery" },
  { id: 37, label: "Supernatural" },
  { id: 1, label: "Action" },
  { id: 8, label: "Drama" },
];

export default function FilterAnimes({ everyAnime, setFilterBasedOnGenre }) {
  const [activeGenre, setActiveGenre] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDropdownSelect = (eventKey) => {
    const selected = genreButtons.find((button) => button.label === eventKey);
    setSelectedItem(selected.label);
    setActiveGenre(selected.id);
  };

  useEffect(() => {
    if (activeGenre === 0) {
      setFilterBasedOnGenre(everyAnime);
      return;
    }

    const filteredAnime = everyAnime.filter((anime) => {
      return anime.genres.some((genre) => genre.mal_id === activeGenre);
    });

    setFilterBasedOnGenre(filteredAnime);
  }, [activeGenre]);

  const handleGenreButtonClick = (genreId) => {
    setActiveGenre(genreId);
  };

  return (
    <div className="container">
      <div className="row d-flex align-items-center mb-5">
        <div className="col-md-6 text-center bg-primary py-3">
          <h5 className="text-light">TV SCHEDULE</h5>
          <Dropdown onSelect={handleDropdownSelect}>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              {selectedItem || "Select a genre"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {genreButtons.map(({ id, label }) => (
                <Dropdown.Item key={id} eventKey={label}>
                  {label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <span className="text-light">Nov 18, 2022</span>
          <span className="text-light"> &nbsp; | &nbsp;</span>
          <span className="text-light">Friday 11:34 AM</span>
        </div>
        <div className="col-md-6 text-center">
          <nav aria-label="Anime genre filter">
            <ul
              className="genre-buttons d-flex flex-wrap mb-5"
              style={{ height: "100%" }}
            >
              {genreButtons.map(({ id, label }) => (
                <li key={id} style={{ marginRight: "10px" }}>
                  <button
                    id="filtered"
                    onClick={() => handleGenreButtonClick(id)}
                    style={{ borderRadius: "10px" }}
                    className={
                      activeGenre === id
                        ? "btn btn-dark"
                        : "btn btn-outline-dark"
                    }
                    aria-current={activeGenre === id ? "page" : undefined}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
