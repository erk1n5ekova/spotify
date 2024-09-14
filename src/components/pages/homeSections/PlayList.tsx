"use client";
import scss from "./PlayList.module.scss";
import { useGetPlaylistsQuery } from "@/redux/api/playlist";
import { useRouter } from "next/navigation";

const PlayList = () => {
  const { data } = useGetPlaylistsQuery();
  const router = useRouter();
  return (
    <section className={scss.PlayList}>
      <div className="container">
        <div className={scss.content}>
          <h1>Vash playlist</h1>

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
    </section>
  );
};

export default PlayList;
