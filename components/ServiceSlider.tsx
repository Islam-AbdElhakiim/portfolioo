// import Swiper core and required modules
"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
} from "swiper/modules";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { serviceData } from "@/constants";
import { RxArrowTopRight } from "react-icons/rx";
import { useRef } from "react";

const ServiceSlider = () => {
  // let nextBtn = useRef<any>();

  // const swiper = useSwiper();

  return (
    <Swiper
      modules={[Navigation, Pagination, FreeMode]}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 3,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      navigation={{ prevEl: '.prev', nextEl: '.next', }}


      spaceBetween={15}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((service, index) => (
        <SwiperSlide key={index} className="group">
          <div className="bg-[rgba(65,47,123,0.15)] h-[310px] flex lg:flex-col justify-between gap-2 px-4 py-6 rounded-xl">
            <div>
              <span className="text-accent text-4xl">{service.icon}</span>
            </div>
            <div className="flex flex-col">
            {service.title}
            <p>{service.description}</p>

            </div>

            <RxArrowTopRight
              className={`mt-3 text-[26px] group-hover:text-accent next group-hover:rotate-45 cursor-pointer transition-all ${
                index == serviceData.length - 1 &&
                "-rotate-45 group-hover:-rotate-[134deg] prev"
              }`}
              // onClick={() => swiper.slideNext()}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
