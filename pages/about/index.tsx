"use client";
import { useState } from "react";
import { aboutData } from "../../constants";
import CountUp from "react-countup";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils";

const About = () => {
  const [aboutDataIndex, setAboutDataIndex] = useState(1);
  return (
    <section className=" w-full h-full z-20">
      {/* Avatar */}
      <div className="hidden xl:block absolute -bottom-10 -left-[19.5%] z-0">
        <Image
          src="/avatar.png"
          alt="Avatar"
          width={600}
          height={600}
          draggable="false"
          className="relative z-0"
        />
      </div>

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

      {/* wrapper */}
      <div className=" w-[100%] h-[76vh] flex flex-col justify-start items-end px-[5%] p-0 mx-auto gap-8 mt-[16vh] lg:flex-row lg:max-w-[60%] lg:pl-5 ">
        {/* left */}
        <motion.div
          className="flex flex-col z-10 my-5 text-center h-[40%] max-lg:justify-center lg:h-[70%] lg:items-start lg:text-start"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
        >
          <h1 className="font-bold text-[32px]">
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs<span className="text-accent">.</span>
          </h1>
          <p className="mt-3">
            Detail-oriented Front-End Developer - Full-Stack when needed - with
            more than 4 years experience working with HTML, CSS, Javascript,
            React, angular and TypeScript. Highly adept at both independent and
            collaborative projects, with an emphasis on systems and websites
            development<span className="text-accent text-2xl">.</span>
          </p>
          <div className="counter hidden lg:block">
            <div className="flex justify-start items-center my-5">
              {/* experience */}
              <div className="relative text-start after:w-[1px] after:h-full after:absolute after:right-0 after:top-0 after:bg-white/10 ">
                <span className="text-2xl xl:text-4xl text-accent font-extrabold">
                  0<CountUp start={0} end={4} duration={5}></CountUp>+
                </span>
                <h2 className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </h2>
              </div>
              {/* Satisfied Clients */}
              <div className=" ml-10 relative text-start after:w-[1px] after:h-full after:absolute after:right-0 after:top-0 after:bg-white/10 ">
                <span className="text-2xl xl:text-4xl text-accent font-extrabold">
                  <CountUp start={0} end={30} duration={8}></CountUp>+
                </span>
                <h2 className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </h2>
              </div>

              {/* Finished Projects */}
              <div className=" ml-10 relative text-start">
                <span className="text-2xl xl:text-4xl text-accent font-extrabold">
                  <CountUp start={0} end={100} duration={8}></CountUp>+
                </span>
                <h2 className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </h2>
              </div>
            </div>
          </div>
        </motion.div>

        {/* right */}
        <motion.div
          className=" w-full h-[48%] flex flex-col justify-start items-center gap-5 lg:flex-[1.3] lg:items-start lg:h-[70%]"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
        >
          {/* btns */}
          <div className="flex justify-start sm:w-[470px]">
            {aboutData &&
              aboutData.map((obj, index) => (
                <>
                  <button
                    className={`relative pb-3 mx-3 group hover:text-accent capitalize transition-colors ${
                      index == aboutDataIndex && "text-accent"
                    }`}
                    onClick={() => setAboutDataIndex(index)}
                  >
                    <span>{obj.title}</span>
                    <span
                      className={`absolute bottom-0 h-1 w-4 left-0 bg-white group-hover:w-full transition-all ${
                        index == aboutDataIndex && "w-full"
                      }`}
                    ></span>
                  </button>
                </>
              ))}
          </div>
          {/* content */}
          <div className="flex flex-col justify-start items-start w-full max-w-[470px] h-full lg:max-h-full lg:justify-center overflow-scroll sm:overflow-hidden text-start">
            {aboutData[aboutDataIndex].info.map((infoObject, index) => (
              <div className="flex justify-start items-center" key={index}>
                {/* ICONS */}
                {infoObject._icons && (
                  <div className="px-3 text-white/50 flex justify-between gap-3 items-center">
                    {infoObject.title}
                    <span className="text-[32px] pb-2"> - </span>
                    <span className="flex justify-center items-center gap-3 text-white">
                      {infoObject._icons &&
                        infoObject._icons.map((icon) => icon)}
                    </span>
                  </div>
                )}
                {/* Stage */}
                {infoObject.stage && (
                  <h2 className="px-3 text-white/50 max-w-[100%] leading-6 my-5">
                    {infoObject.title}
                    <span className="text-[22px] py-3">
                      {" "}
                      <br />{" "}
                    </span>
                    <a
                      href={infoObject.url}
                      target="_blank"
                      className="text-accent font-bold"
                    >
                      {infoObject.company}{" "}
                    </a>
                    <span>({infoObject.stage})</span>
                  </h2>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
