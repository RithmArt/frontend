/**
 *
 * HomePage
 *
 */

import React from "react";
import { useInjectHomePageSlice } from "./slice";
import { Hero } from "./components/hero";
// import { useDispatch } from "react-redux";

export const HomePage = () => {
  useInjectHomePageSlice();
  // const dispatch = useDispatch();

  return <Hero />;
};
