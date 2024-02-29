"use client";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveContext } from "@/context/ActiveSectionContext";

const Header = () => {
  const { activeSection, setActiveSection, setLastActiveSectionTime } =
    useActiveContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[2.2rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative h-3/4 flex items-center justify-center"
              key={link.hash}
            >
              <motion.div
                layoutId={link.name}
                transition={{
                  type: "spring",
                  stiffness: 10,
                  damping: 10,
                }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-1 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                    {
                      "text-gray-950 bg-gray-200 rounded-full":
                        activeSection == link.name,
                    }
                  )}
                  href={link?.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setLastActiveSectionTime(new Date());
                  }}
                >
                  {link?.name}
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
