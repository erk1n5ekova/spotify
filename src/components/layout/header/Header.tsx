"use client";
import { useGetMeQuery } from "@/redux/api/me";
import scss from "./Header.module.scss";
import SearchTracks from "@/components/shared/SearchTracks";

const Header = () => {
  const { data: session } = useGetMeQuery();
  const login = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/login`,
      "_self"
    );
  };

  const logout = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/logout`,
      "_self"
    );
  };

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src="/images/logo.png" alt="" />
          </div>
          <div className={scss.search}>
            <SearchTracks />
          </div>
          <div className={scss.auth}>
            {session ? (
              <>
                <div>
                  <h1>{session.display_name}</h1>
                  <p>{session.email}</p>
                  <button onClick={logout}>logout</button>
                </div>
              </>
            ) : (
              <>
                <button onClick={login}>login</button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
