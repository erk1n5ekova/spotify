"use client";
import scss from "./SearchResults.module.scss";
import { useParams } from "next/navigation";
import { useSearchTracksQuery } from "@/redux/api/search";
import { usePlayerStore } from "@/stores/usePlayerStore";

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
                <span className={scss.track_number}>{index + 1}.</span>{" "}
                <img src={item.album.images[0].url} alt="album" />
                <h1>{item.name}</h1>
                <p className={scss.traks_text}>
                  Artist:
                  {item.artists.map((artist, artistIndex) => (
                    <span key={artistIndex}>{artist.name}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
