import React, { ReactElement } from "react";

// Import Swiper React components
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { styled } from "@mui/material";
interface SwiperProps {
  items: ReactElement[];
}
export const SwiperSlider = (props: SwiperProps) => {
  const { items } = props;

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
        {items.map((item, index) => {
          return <SwiperSlide key={index}>{item}</SwiperSlide>;
        })}
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
