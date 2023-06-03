/**
 *
 * Asynchronously loads the component for HomePage
 *
 */
import React from "react";
import { lazyLoad } from "common/loadable";
import { PageLoading } from "app/components/common/pageLoading";

export const WorkshopPage = lazyLoad(
  () => import("./index"),
  (module) => module.WorkshopPage,
  { fallback: <PageLoading /> }
);
