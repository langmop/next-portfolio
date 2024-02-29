"use client";

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/Hooks";

const About = ({ about }: { about: React.ReactNode }) => {
  const { ref } = useSectionInView({
    threshold: 0.75,
    activeSectionName: "About",
  });

  const About = about;

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="scroll-mt-28 px-4 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40px mt-24 sm:mt-0"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">{About}</p>
    </motion.section>
  );
};

export default About;
