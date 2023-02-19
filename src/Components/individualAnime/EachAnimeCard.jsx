import React from "react";

export default function EachAnimeCard({ singleAnimeDetail }) {
  const {
    title,
    rank,
    popularity,
    synopsis,
    duration,
    rating,
    trailer,
    aired,
    status,
  } = singleAnimeDetail;

  return (
    <article>
      <h2 className="text-warning mb-4">
        <strong>{title}</strong>
      </h2>
      <div className="d-flex ">
        <p className="text-primary ">
          Rank:&nbsp;<span className="text-white">{rank}</span>
        </p>
        <p className="text-primary mx-3">
          Popularity:&nbsp;<span className="text-white">{popularity}</span>
        </p>
      </div>
      <p className="text-white">{synopsis} </p>
      <p className="text-primary">
        Duration:&nbsp;<span className="text-white">{duration}</span>
      </p>
      <p className="text-primary">
        Rating:&nbsp;<span className="text-white">{rating}</span>
      </p>
      {trailer && (
        <p className="text-primary">
          Trailer: &nbsp;
          <a
            className="text-white"
            href={trailer.url}
            target="_blank"
            rel="noreferrer"
          >
            {trailer.url}
          </a>
        </p>
      )}
      <p className="text-primary">
        Aired:&nbsp;
        <span className="text-white">
          {aired?.prop?.from.day}/{aired?.prop?.from.month}/
          {aired?.prop?.from.year} to &nbsp;
          {aired?.prop?.to.day}/{aired?.prop?.to.month}/{aired?.prop?.to.year}
        </span>
      </p>
      <p className="text-primary">
        Status:&nbsp;<span className="text-white">{status}</span>
      </p>
    </article>
  );
}
