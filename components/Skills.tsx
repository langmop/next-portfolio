"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/Hooks";
import { animate, motion } from "framer-motion";

const fadeInAnimationVarients = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

const Skills = ({ skills }: { skills: React.ReactNode[] }) => {
  const { ref } = useSectionInView({
    activeSectionName: "Skills",
    threshold: 0.5,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="mt-24 mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skills?.map((skill: React.ReactNode, index: number) => {
          return (
            <motion.li
              variants={fadeInAnimationVarients}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              key={index}
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            >
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
