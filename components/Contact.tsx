"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/Hooks";
import SubmitButton from "./SubmitButton";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/setEmail";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView({
    threshold: 0.75,
    activeSectionName: "Contact",
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
      ref={ref}
      className="text-center mt-12 scroll-mt-24 mb-20 sm:mb-28 w-[min(100%,38rem)] "
      id="contact"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 mt-3 dark:text-white">
        Please contact me directly at{" "}
        <a type="email" href="mailto:mishragaurav656">
          mishragaurav656@gmail.com
        </a>
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
          } else {
            toast.success("Your message has been sent!");
          }
        }}
        className="mt-10 flex flex-col mx-4"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:text-black dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:text-black dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          id="message"
          placeholder="Your Message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
