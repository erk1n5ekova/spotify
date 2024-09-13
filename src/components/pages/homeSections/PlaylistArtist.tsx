"use client";
import scss from "./PlayListArtist.module.scss";
import { useGetArtistsQuery } from "@/redux/api/artists";

const PlaylistArtist = () => {
  const { data } = useGetArtistsQuery();

  return (
    <div className={scss.PlayListArtist}>
      <div className="container">
        <div className={scss.content}>
          <h1>Artists</h1>
          <div className={scss.name_artists}>
            {data?.artists.map((item, index) => (
              <div key={index} className={scss.artist}>
                <img src={item.images[0].url} alt="" />
                <h1>{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistArtist;
