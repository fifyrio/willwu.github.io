"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mt-12 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <p className="text-base">
          I am a quick learner and a self-driven who continually seeks personal growth and learning. Unafraid of challenges, I take pride in problem-solving using my independent and critical thinking abilities, pushing the boundaries to bring out the best solutions.
        </p>
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
      </p>

      <p className="mb-4">
        <span className="italic ">When I'm not coding</span>, I enjoy swimming, badminton, watching movies or anime. I also
        enjoy <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
