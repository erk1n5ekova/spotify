"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DebounceInput } from "react-debounce-input";
import { IoSearch } from "react-icons/io5";

import scss from "./SearchTrack.module.scss";
const SearchTracks = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hasFocusInput, setHasFocusInput] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (hasFocusInput) {
      if (searchQuery) {
        router.push(`/search/${searchQuery}`);
      } else {
        router.push(`/search`);
      }
    }
  }, [searchQuery]);

  return (
    <>
      <DebounceInput
        className={scss.search}
        type="text"
        placeholder="enter search track..."
        minLength={2}
        debounceTimeout={300}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        onFocus={() => {
          setHasFocusInput(true);
          router.push(`/search`);
        }}
      />
    </>
  );
};

export default SearchTracks;
