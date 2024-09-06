"use client";
import SpotifyWebPlayer from "react-spotify-web-playback";
import scss from "./Footer.module.scss";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useEffect } from "react";
import axios from "axios";

const Footer = () => {
  const { accessToken, trackUris, trackIndex, setAccessToken } =
    usePlayerStore();

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
            uris={trackUris}
            styles={{
              activeColor: "#fff",
              bgColor: " rgba(47, 48, 48, 0.21)",
              color: "#fff",
              loaderColor: "#fff",
              sliderColor: "#1cb954",
              trackArtistColor: "#05043a",
              trackNameColor: "#fff",
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
