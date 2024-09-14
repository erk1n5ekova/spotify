"use client";
import { useGetMeQuery } from "@/redux/api/me";
import scss from "./Header.module.scss";
import SearchTracks from "@/components/shared/SearchTracks";
import { MdHomeFilled } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const handleProfileClick = () => {
    router.push("/me");
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
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
          <div
            className={scss.logo}
            onClick={() => {
              router.push(`/`);
            }}
          >
            <h1>Spotify</h1>
            <img src="/images/logo.png" alt="" />
          </div>

          <div className={scss.search}>
            <MdHomeFilled
              className={scss.home_svg}
              onClick={() => {
                router.push(`/`);
              }}
            />
            <SearchTracks />
          </div>
          <div className={scss.auth}>
            {session ? (
              <>
                <div className={scss.auth_info}>
                  <div className={scss.userSection}>
                    <span onClick={toggleMenu} className={scss.username}>
                      <h1>{session.display_name}</h1>
                    </span>
                    {showMenu && (
                      <div className={scss.dropdownMenu}>
                        <button
                          onClick={handleProfileClick}
                          className={scss.menuItem}
                        >
                          Мой профиль
                        </button>
                      </div>
                    )}
                  </div>
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
{
  /* <p>{session.email}</p> */
}
// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import styles from "./Header.module.scss"; // Your SCSS file for styling

// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const router = useRouter();

//   const handleProfileClick = () => {
//     router.push("/profile"); // Redirect to profile page
//   };

// const toggleMenu = () => {
//   setShowMenu(!showMenu);
// };

//   return (
// <div className={styles.headerContainer}>
//   <div className={styles.userSection}>
//     <span onClick={toggleMenu} className={styles.username}>
//       nurkyz erkinbekova
//     </span>
//     {showMenu && (
//       <div className={styles.dropdownMenu}>
//         <button onClick={handleProfileClick} className={styles.menuItem}>
//           Мой профиль
//         </button>
//       </div>
//     )}
//   </div>
//   <button className={styles.logoutButton}>Logout</button>
// </div>
//   );
// };

// export default Header;
