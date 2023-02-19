import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimeContext } from "../../App";
import EachAnimeCard from "./EachAnimeCard";

export default function EachAnimeDetails() {
  const { loading, setLoading } = useContext(AnimeContext);
  const { id } = useParams();

  const [singleAnimeDetail, setSingleAnimeDetail] = useState(null);

  useEffect(() => {
    async function fetchEachAnimeByID() {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        setSingleAnimeDetail(result.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchEachAnimeByID();
  }, [id, setLoading]);

  if (loading || !singleAnimeDetail) {
    return <h2 className="text-primary text-center my-5">Loading...</h2>;
  }

  return (
    <main className="bg-dark py-5">
      <div className="container">
        <div className="row d-flex justify-content-center py-3">
          <section className="col-md-7">
            <EachAnimeCard singleAnimeDetail={singleAnimeDetail} />
          </section>
          <aside className="col-md-5">
            <figure>
              <img
                src={singleAnimeDetail.images?.jpg.large_image_url}
                className="img-fluid img-thumbnail"
                style={{
                  width: "400px",
                  height: "500px",
                  borderRadius: "8px",
                }}
                alt={singleAnimeDetail.title}
                loading="lazy"
              />
              <figcaption className="text-primary">
                {singleAnimeDetail.title}
              </figcaption>
            </figure>
          </aside>
        </div>
        <Link className="btn btn-success my-3" to="/">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
