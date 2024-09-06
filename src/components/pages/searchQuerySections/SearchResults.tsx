"use client";
import scss from "./SearchResults.module.scss";
import { useParams } from "next/navigation";
import { useSearchTracksQuery } from "@/redux/api/search";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { it } from "node:test";

const SearchResults = () => {
  const params = useParams();
  const decodeText = decodeURIComponent(String(params.searchQuery));
  const { data } = useSearchTracksQuery(decodeText);
  const { setTrackUris, setTrackIndex } = usePlayerStore();

  const playMusic = (index: number) => {
    const getTrackUris = data?.tracks.items.map((item) => item.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
  };

  return (
    <section className={scss.SearchResults}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.tracks}>
            {data?.tracks.items.map((item, index) => (
              <div
                key={index}
                className={scss.track}
                onClick={() => {
                  playMusic(index);
                }}
              >
                <img src={item.album.images[0].url} alt="album" />
                <h1>{item.name}</h1>
                <p className={scss.traks_text}>
                  Artist:
                  {item.artists.map((artist) => (
                    <p key={index}>{artist.name}</p>
                  ))}
                </p>
                <p>Album:{item.album.album_type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
