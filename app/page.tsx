// "use client";
import dynamic from "next/dynamic";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import { formatContentfulResponse } from "@/utils/formatContentfulResponse";
// import { useEffect, useState } from "react";
import fetchContentful from "@/utils/fetchContentful";

const About = dynamic(() => import("@/components/About"), {
  ssr: false,
});

const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});

export default async function Home() {
  const portfolioData = formatContentfulResponse(await fetchContentful());

  return (
    <main className="flex flex-col items-center justify-center">
      <Intro portfolioData={portfolioData} />
      <SectionDivider />
      <About about={portfolioData?.about} />
      <Projects projects={portfolioData?.projects} />
      <Skills skills={portfolioData?.skills} />
      <Experience experiences={portfolioData?.experiences} />
      <Contact />
    </main>
  );
}
