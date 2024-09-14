"use client";
import { useGetMeQuery } from "@/redux/api/me";
import React from "react";

const Profile = () => {
  const { data } = useGetMeQuery();
  return <div>hi</div>;
};

export default Profile;
