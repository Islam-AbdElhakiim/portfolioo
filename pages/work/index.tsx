"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "@/utils";

const Work = () => {
  return (
    <section className="w-full h-full">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full h-[76vh] mt-[16vh] px-10 flex flex-col justify-center items-end mx-auto md:max-w-[60%] xl:flex-row"
      >
        {/* Text  => Left*/}
        <div className="w-full h-[40%] flex flex-col justify-center items-center xl:justify-start xl:items-start xl:w-[40%] xl:h-[70%]">
          <h1 className="font-extrabold text-[32px] mb-5">
            My Work<span className="text-accent">.</span>
          </h1>
          <p className="px-2">
            Because I don&apos;t have the right to publish my major works, I&apos;ve created some live templates for portfolio purposes, and they&apos;re always under development<span className="text-accent text-2xl">.</span> 
          </p>
        </div>

        {/* Swapper => Right*/}
        <div className="w-full xl:w-[60%] xl:h-[70%]">
          <WorkSlider />
        </div>
      </motion.div>
      {/* Planet */}
      <div className="hidden xl:block absolute -bottom-10 -right-10 mix-blend-color-dodge ">
        <Image
          src="/circles.png"
          alt="Circles Image"
          width={300}
          height={300}
          draggable="false"
        />
      </div>
    </section>
  );
};

export default Work;
