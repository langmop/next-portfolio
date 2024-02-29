"use client";

import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/Hooks";
import noDataImage from "../public/Box.svg";
import Image from "next/image";

type ProjectType = (typeof projectsData)[number];

const Projects = (
  { projects = [] }: { projects: React.ReactNode[] } = { projects: [] }
) => {
  const { ref } = useSectionInView({
    threshold: 0.5,
    activeSectionName: "Projects",
  });

  return (
    <section ref={ref} id="projects" className="text-center scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="flex flex-col gap-6">
        {!projects?.length ? (
          <p className="sm:text-6xl text-3xl bg-white p-4 rounded-lg dark:bg-white/10 dark:text-white/80">
            Projects Upcoming...
          </p>
        ) : (
          (projects || []).map((project: any, index: number) => {
            return (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Projects;
