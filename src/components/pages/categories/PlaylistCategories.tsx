"use client";
import { useGetCategoriesQuery } from "@/redux/api/categories";
import React from "react";
import scss from "./PlaylistCategories.module.scss";

const PlaylistCategories = () => {
  const { data } = useGetCategoriesQuery();

  return (
    <div className={scss.PlailistCategories}>
      <div className="container">
        <h1>Categories</h1>

        <div className={scss.content}>
          {data?.categories.items.map((category) => (
            <div key={category.id} className={scss.category}>
              <img
                src={category.icons[0]?.url}
                alt={category.name}
                width={category.icons[0]?.width}
                height={category.icons[0]?.height}
              />
              <h2>{category.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistCategories;
