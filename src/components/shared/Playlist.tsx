"use client";
import { useGetPlaylistsQuery } from "@/redux/api/playlist";
import scss from "./Playlist.module.scss";
import { useRouter } from "next/navigation";

const Playlist = () => {
  const { data } = useGetPlaylistsQuery();
  const router = useRouter();
  return (
    <div className={scss.Playlist}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.name_tracks}>
            {data?.items.map((item, index) => (
              <div
                key={index}
                className={scss.track}
                onClick={() => {
                  router.push(`/playlist/${item.id}`);
                }}
              >
                <img src={item.images[0].url} alt="album" />
                <h1>{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
