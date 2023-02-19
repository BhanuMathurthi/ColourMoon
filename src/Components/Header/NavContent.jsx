import React from "react";
import { Link } from "react-router-dom";

export default function NavContent({ menuItem }) {
  const renderSubMenu = () => {
    return (
      <ul className="dropdown-menu" aria-labelledby={`menu-${menuItem.label}`}>
        {menuItem.submenu.map((submenuItem, submenuIndex) => (
          <li key={submenuIndex}>
            <Link className="dropdown-item" to={submenuItem.path}>
              {submenuItem.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const renderMenuItem = () => {
    if (menuItem.submenu) {
      return (
        <div className="nav-item dropdown">
          <Link
            style={{ fontSize: "14px" }}
            className="nav-link text-white dropdown-toggle"
            to={menuItem.path}
            id={`menu-${menuItem.label}`}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {menuItem.label}
          </Link>
          {renderSubMenu()}
        </div>
      );
    } else {
      return (
        <li className="nav-item">
          <Link
            style={{ fontSize: "14px" }}
            className="nav-link text-white"
            to={menuItem.path}
          >
            {menuItem.label}
          </Link>
        </li>
      );
    }
  };

  return renderMenuItem();
}
