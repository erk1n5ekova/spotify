"use client";
import { useGetPlaylistByIdQuery } from "@/redux/api/playlist";
import scss from "./Playlistid.module.scss";
import { useParams } from "next/navigation";
import { usePlayerStore } from "@/stores/usePlayerStore";

const PlaylistId = () => {
  const { playlistId } = useParams();
  const { data } = useGetPlaylistByIdQuery(String(playlistId));
  const { activeTrackUri, setTrackUris, setTrackIndex, setActiveTrackUri } =
    usePlayerStore();

  const playMusic = (index: number, uri: string) => {
    const getTrackUris = data?.tracks.items.map((item) => item.track.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
    setActiveTrackUri(uri);
  };

  return (
    <section className={scss.PlaylistId}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.tracks}>
            {data?.tracks.items.map((item, index) => (
              <div
                key={index}
                className={
                  item.track.uri === activeTrackUri
                    ? `${scss.track} ${scss.active}`
                    : `${scss.track}`
                }
                onClick={() => {
                  playMusic(index, item.track.uri);
                }}
              >
                <img src={item.track.album.images[0].url} alt="album" />
                <h1>{item.track.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaylistId;
