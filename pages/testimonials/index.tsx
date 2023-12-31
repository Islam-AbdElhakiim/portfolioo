"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import WorkSlider from "../../components/WorkSlider";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { fadeIn } from "@/utils";

const Testimonials = () => {
  return (
    <section className="w-full h-full">
      <motion.div 
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className=" w-full h-[76vh] mt-[16vh] flex flex-col justify-center items-center xl:mx-auto md:max-w-[60%] md:mx-auto">
        {/* Text => left*/}
        <div className="font-bold text-[32px]">
          <h1>
            What clients <span className="text-accent">say.</span>
          </h1>
        </div>

        {/* Swiper */}
        <TestimonialsSlider />

        {/* Bulb */}
        <div className="hidden xl:abolute absolute -bottom-20 -left-36 mix-blend-color-dodge ">
          <Image
            src="/bulb.png"
            alt="Circles Image"
            width={260}
            height={260}
            draggable="false"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
