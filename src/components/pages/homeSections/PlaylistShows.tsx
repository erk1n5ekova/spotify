"use client";
import { useGetShowsQuery } from "@/redux/api/shows";
import scss from "./PlaylistShows.module.scss";
import { useEffect } from "react";

const PlaylistShows = () => {
  const { data } = useGetShowsQuery();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className={scss.PlaylistShows}>
      <div className="container">
        <div className={scss.content}>
          <h1>Shows</h1>
          <div className={scss.name_artists}>
            {data?.shows.map((item, index) => (
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

export default PlaylistShows;
