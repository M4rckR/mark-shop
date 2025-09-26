"use client";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import Swiper from "swiper";
import Image from "next/image";
// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductSlideShow = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);

  return (
    <div className={className}>
      <SwiperComponent
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        } as React.CSSProperties } 
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/products/${image}`}
              alt={title}
              width={1024}
              height={800}
              className="object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <SwiperComponent
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/products/${image}`}
              alt={title}
              width={100}
              height={100}
              className="w-[100px] h-[100px] object-cover"
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};
