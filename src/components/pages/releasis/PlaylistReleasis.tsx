"use client";
import { useGetReleasisQuery } from "@/redux/api/relleases";
import scss from "./PlaylistReleases.module.scss";
import { usePlayerStore } from "@/stores/usePlayerStore";

const PlaylistReleasis = () => {
  const { data } = useGetReleasisQuery();
  const { setTrackUris, setTrackIndex } = usePlayerStore();

  const playMusic = (index: number) => {
    const getTrackUris = data?.albums.items.map((item) => item.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
  };
  return (
    <div className={scss.PlaylistReleasis}>
      <div className="container">
        <h1>New Releases</h1>

        <div className={scss.content}>
          {data?.albums?.items?.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                playMusic(index);
              }}
            >
              <img src={item.images[0]?.url} alt={item.name} />

              <h2>{item.name}</h2>
              <p>
                Artist: {item.artists.map((artist) => artist.name).join(", ")}
              </p>
              <p>Release {item.release_date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistReleasis;
