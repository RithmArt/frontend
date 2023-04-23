/**
 *
 * HomePage
 *
 */

import React from "react";
import { useInjectHomePageSlice } from "./slice";
import { ContainedButton } from "app/components/common/buttons/containedButton";
// import { useDispatch } from "react-redux";

export const HomePage = () => {
  useInjectHomePageSlice();
  // const dispatch = useDispatch();

  return (
    <>
      <ContainedButton
      // onClick={handleGetBestSwapPathClick}
      >
        test getOptimal Path
      </ContainedButton>
    </>
  );
};
