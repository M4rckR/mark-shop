"use client";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import Image from "next/image";
// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideShow = ({ images, title, className }: Props) => {

  return (
    <div className={className}>
      <SwiperComponent
        navigation={true}
        autoplay={{
          delay: 2500,  
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Navigation, Autoplay]}
        className="mySwiper2 w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/products/${image}`}
              alt={title}
              width={400}
              height={400}
              className=""
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};
