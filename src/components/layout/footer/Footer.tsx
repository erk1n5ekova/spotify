"use client";
import SpotifyWebPlayer from "react-spotify-web-playback";
import scss from "./Footer.module.scss";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useEffect } from "react";
import axios from "axios";

const Footer = () => {
  const {
    accessToken,
    trackUris,
    trackIndex,
    setAccessToken,
    setActiveTrackUri,
  } = usePlayerStore();

  const getAccessToken = async () => {
    const { data } = await axios.get("/api/auth/get-access-token");
    setAccessToken(data.accessToken);
  };
  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <SpotifyWebPlayer
            token={accessToken}
            offset={trackIndex!}
            callback={(state) => {
              if (state.isPlaying) {
                setActiveTrackUri(state.track.uri);
              }
            }}
            uris={trackUris}
            styles={{
              activeColor: "#fff",
              bgColor: "#000",
              color: "#fff",
              loaderColor: "#fff",
              sliderColor: "#1cb954",
              trackArtistColor: "#fff",
              trackNameColor: "#fff",
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
