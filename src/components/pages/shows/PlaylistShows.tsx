"use client";
import { useGetShowsQuery } from "@/redux/api/shows";
import scss from "./PlaylistShows.module.scss";

const PlaylistShows = () => {
  const { data } = useGetShowsQuery();

  return (
    <div className={scss.PlaylistShows}>
      <div className="container">
        <h1>Shows</h1>
        <div className={scss.content}>
          {data?.shows?.map((item, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h2>{item.name}</h2>
              <p>Description: {item.description}</p>
              <p>Publisher: {item.publisher}</p>
              <p>Total Episodes: {item.total_episodes}</p>
              <img src={item.images[0]?.url} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistShows;
