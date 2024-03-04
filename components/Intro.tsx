"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveContext } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/lib/Hooks";
import { PortfolioData } from "@/interface/interface";

const Intro = ({ portfolioData }: { portfolioData: PortfolioData }) => {
  const { ref } = useSectionInView({
    threshold: 0.2,
    activeSectionName: "Home",
  });

  const { setActiveSection, setLastActiveSectionTime } = useActiveContext();

  const {
    profilePhotoUrl,
    socials: { linkedin, github },
    description: Description,
    resume,
  } = portfolioData;

  return (
    <section ref={ref} id="home" className="scroll-mt-52 mb-64">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              autoFocus
              width="300"
              height="192"
              quality="95"
              alt="profile photo"
              src={profilePhotoUrl}
              priority={true}
              className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
            animate={{ rotate: [90, -60, 90, 20], opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 1.5,
            }}
            className="text-4xl absolute bottom-[12px] right-[4px]"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 px-4 text-2xl text-center font-medium !leading-[1.5] sm:text-3xl w-full sm:w-1/2 m-auto mt-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {Description}
      </motion.h1>
      <motion.div
        className="flex flex-col flex-wrap sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          onClick={() => {
            setActiveSection("Contact");
            setLastActiveSectionTime(new Date());
          }}
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href={resume}
          target="_blank"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-2 sm:flex-row sm:gap-3">
          <a
            className="bg-white h-[55px] w-[55px] p-4 text-gray-700 hover:text-gray-950 flex items-center justify-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href={linkedin}
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full justify-center focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href={github}
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
