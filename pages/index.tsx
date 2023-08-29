// "use client";
import Avatar from "@/components/Avatar";
import CallToAction from "@/components/CallToAction";
import ParticlesWrapper from "@/components/ParticlesWrapper";
import { fadeIn } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Fragment } from "react";

const Home = () => {
  return (
    <motion.section className=" h-full bg-primary flex flex-col justify-center xl:pt-20 xl:px-[20%] xl:justify-start xl:flex-row ">
      {/* Text */}
      <div className="font-bold flex flex-col items-center xl:items-start justify-center mt-16">
        {/* Title */}
        <div className=" h1 w-9/12 xl:w-8/12">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Transforming Ideas{/* <br className="hidden max-sm:block"/> */} Into{" "}
            {/* <br className="hidden max-sm:block"/> */}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
        </div>

        {/* Description */}
        <div className="desc w-9/12 -mt-5 xl:mt-0 font-semibold xl:w-1/2">
          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            the Idea of creating, designing, and crafting business ideas from scratch, being responsible about someone's success is a simply me.
          </motion.p>
        </div>
        {/* Projects */}
        <div className="projects mt-10 z-20">
          <CallToAction />
        </div>
      </div>

      {/* Explosion Image */}
      <div className=" w-[1280px] h-full absolute bottom-0 right-0 ">
        <div className="bg-none xl:bg-explosion w-full h-full mix-blend-color-dodge bg-right bg-no-repeat relative "></div>
      </div>

      {/* Avatar Image */}
      <motion.div
        className="hidden xl:block absolute right-24 -bottom-10 z-20"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        transition={{duration:1, ease:'easeInOut'}}
        animate="show"
        exit='hidden'
      >
        <Avatar />
      </motion.div>

      {/* Particles */}
      <ParticlesWrapper />
    </motion.section>
  );
};

export default Home;
