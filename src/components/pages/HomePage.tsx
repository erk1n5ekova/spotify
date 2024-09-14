import PlaylistAlbums from "./albums/PlaylistAlbums";
import PlaylistCategories from "./categories/PlaylistCategories";
import PlayList from "./homeSections/PlayList";
import PlaylistLike from "./like/PlaylistLike";
import PlaylistReleasis from "./releasis/PlaylistReleasis";
import PlaylistShows from "./shows/PlaylistShows";

const HomePage = () => {
  return (
    <>
      <PlayList />
      <PlaylistShows />
      <PlaylistReleasis />
      <PlaylistAlbums />
      <PlaylistLike />
      <PlaylistCategories />
    </>
  );
};

export default HomePage;
