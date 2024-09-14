"use client";
import scss from "./PlaylistLike.module.scss";
import React from "react";
import { useGetLikeQuery } from "@/redux/api/like";

const PlaylistLike = () => {
  const { data } = useGetLikeQuery();
  return (
    <div className={scss.playlistAlbums}>
      <div className="container">
        <h1>Liked Tracks</h1>
        <div className={scss.albumsList}>
          {data?.items.map((item, index) => (
            <div key={index} className={scss.albumItem}>
              <img
                src={item.track.album.images[0]?.url}
                alt={item.track.album.name}
                width={item.track.album.images[0]?.width}
                height={item.track.album.images[0]?.height}
              />
              <h2>{item.track.name}</h2>
              <p>
                {item.track.artists.map((artist) => artist.name).join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistLike;
