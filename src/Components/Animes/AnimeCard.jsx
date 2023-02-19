import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function AnimeCard({ data }) {
  const {
    mal_id,
    title,
    images: {
      webp: { large_image_url },
    },
    score,
  } = data;

  return (
    <article className="col-lg-3 col-md-4 col-sm-6 anime">
      <Link
        to={`/anime/${mal_id}`}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <figure className="text-start">
          <img
            className="img-fluid img-thumbnail"
            loading="lazy"
            src={large_image_url}
            alt={title}
            style={{ width: "300px", height: "250px", borderRadius: "15px" }}
          />
          <figcaption
            className="mt-2"
            style={{ color: "#112a60", fontSize: "18px" }}
          >
            <strong>{title}</strong> &nbsp;
            <span className="rating">
              <FaStar color="#f5c518" /> {score}
            </span>
          </figcaption>
        </figure>
      </Link>
    </article>
  );
}
