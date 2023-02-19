import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const RenderAnimes = lazy(() => import("../Animes/RenderAnimes"));
const EachAnimeDetails = lazy(() =>
  import("../individualAnime/EachAnimeDetail")
);

export default function Routing() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RenderAnimes />
            </Suspense>
          }
        />
        <Route
          path="/anime/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <EachAnimeDetails />
            </Suspense>
          }
        />
        <Route path="/serials" element={<h1>Serials</h1>} />
        <Route path="/serials/team" element={<h1>Our Team</h1>} />
        <Route path="/serials/story" element={<h1>Our Story</h1>} />
        <Route path="/shows" element={<h1>Shows</h1>} />
        <Route path="/shows/team" element={<h1>Our Team</h1>} />
        <Route path="/shows/story" element={<h1>Our Story</h1>} />
        <Route path="/schedule" element={<h1>Schedule</h1>} />
        <Route path="/schedule/team" element={<h1>Our Team</h1>} />
        <Route path="/schedule/story" element={<h1>Our Story</h1>} />
        <Route path="/archives" element={<h1>Archives</h1>} />
        <Route path="/archives/team" element={<h1>Our Team</h1>} />
        <Route path="/archives/story" element={<h1>Our Story</h1>} />
        <Route path="/events" element={<h1>Events</h1>} />
        <Route path="/events/team" element={<h1>Our Team</h1>} />
        <Route path="/events/story" element={<h1>Our Story</h1>} />
      </Routes>
    </>
  );
}
