import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./MenuItemsList";
import NavContent from "./NavContent";
import SearchAnime from "../Animes/SearchAnime";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderNavContent = () => {
    return menuItems.map((menuItem, index) => (
      <NavContent key={index} menuItem={menuItem} index={index} />
    ));
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container">
          <Link className="navbar-brand text-white" to="/">
            ColourMoon Tech
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {renderNavContent()}
            </ul>

            <SearchAnime />
          </div>
        </div>
      </nav>
    </header>
  );
}
