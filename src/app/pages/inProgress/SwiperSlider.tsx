import React, { ReactElement } from "react";

import { Frame } from "app/components/common/frame";

// Import Swiper React components
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import frameTest1 from "assets/images/frametest1.png";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { styled } from "@mui/material";

export const SwiperSlider = (): ReactElement => {
  return (
    <>
      <MainSwiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={false}
        pagination={false}
        freeMode
        loop
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 5000,
        }}
        modules={[Autoplay]}
        className="main"
      >
        <SwiperSlide>
          <Frame
            src={frameTest1}
            bottomInfo={{
              title: "test title",
              description: "test description",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Frame
            src={frameTest1}
            bottomInfo={{
              title: "test title",
              description: "test description",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Frame
            src={frameTest1}
            bottomInfo={{
              title: "test title",
              description: "test description",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Frame
            src={frameTest1}
            bottomInfo={{
              title: "test title",
              description: "test description",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Frame
            src={frameTest1}
            bottomInfo={{
              title: "test title",
              description: "test description",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Frame
            src={frameTest1}
            bottomInfo={{
              title: "test title",
              description: "test description",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Frame
            src={frameTest1}
            bottomInfo={{
              title: "test title",
              description: "test description",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Frame
            src={frameTest1}
            bottomInfo={{
              title: "test title",
              description: "test description",
            }}
          />
        </SwiperSlide>
      </MainSwiper>
    </>
  );
};

const MainSwiper = styled(Swiper)`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
