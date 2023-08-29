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
//data
import { testimonialData } from "@/constants";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialsSlider = () => {
  return (
    <Swiper
      onSwiper={(swiper) => {
        swiper.changeLanguageDirection("rtl");
      }}
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      freeMode={false}
      // dots
      pagination={true}
      // arrows
      navigation={true}
      className=" w-full mt-5 h-max md:h-[480px]"
    >
      {testimonialData.map((testimonial, index) => (
        <SwiperSlide key={index} className="px-16">
          <div className="flex flex-col items-center h-full md:flex-row">
            {/* Avatar */}
            <div className="flex flex-col relative justify-center items-center md:flex-1 after:w-[1px] after:h-full after:bg-white/30 after:absolute after:left-0 font-sora md:ml-10 after:hidden md:after:absolute md:order-2 ">
              <Image
                src={testimonial.image}
                alt={testimonial.name + "image"}
                width={75}
                height={75}
              />
              <h2 className="text-xl">{testimonial.name}</h2>
              <h4 className="uppercase">{testimonial.position}</h4>
            </div>

            {/* Quote Text */}
            <div className="flex flex-col justify-center items-center md:items-start md:flex-[2] text-justify">
              <FaQuoteRight className="text-white/30 text-[30px] mb-5 self-start" />
              <p className=" leading-6 tracking-tighter">{testimonial.message}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsSlider;
