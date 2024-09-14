"use client";
import { useGetRecommendationsQuery } from "@/redux/api/recommends";
import scss from "./Recommends.module.scss";
import React from "react";
import PlaylistReleasis from "../releasis/PlaylistReleasis";
import PlaylistCategories from "../categories/PlaylistCategories";

const Recommends = () => {
  const { data } = useGetRecommendationsQuery();

  return (
    <section className={scss.Recommends}>
      <h1>Recommended Tracks</h1>
      <PlaylistReleasis />
      <PlaylistCategories />
      <div className={scss.RecommendationsList}>
        {data?.tracks.map((track) => (
          <div key={track.id} className={scss.TrackItem}>
            <img
              src={track.album.images[0]?.url}
              alt={track.album.name}
              width={track.album.images[0]?.width}
              height={track.album.images[0]?.height}
            />
            <h2>{track.name}</h2>
            <p>By: {track.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommends;
