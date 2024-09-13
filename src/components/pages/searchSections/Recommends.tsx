"use client";
import { useGetRecommendationsQuery } from "@/redux/api/recommends";
import scss from "./Recommends.module.scss";

const Recommends = () => {
  const { data } = useGetRecommendationsQuery();
  return (
    <section className={scss.Recommends}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h2>recommends</h2>
          {data?.tracks.map((item, index) => (
            <div key={index} className={scss.artist}>
              <img src={item.album.images[0].url} alt="" />
              <h1>{item.album.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommends;
