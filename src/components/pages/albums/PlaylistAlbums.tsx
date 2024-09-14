"use client";
import { useGetAlbumsQuery } from "@/redux/api/album";
import scss from "./PlaylistAlbums.module.scss";
import React from "react";

const PlaylistAlbums = () => {
  const { data } = useGetAlbumsQuery();

  return (
    <div className={scss.playlistAlbums}>
      <div className="container">
        <h1>Albums</h1>
        <div className={scss.albumList}>
          {data?.albums.map((item, index) => (
            <div key={index} className={scss.album}>
              <img src={item.images[0]?.url} alt={item.name} />
              <h2>{item.name}</h2>
              <p>Artist: {item.artists.map((item) => item.name)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistAlbums;
