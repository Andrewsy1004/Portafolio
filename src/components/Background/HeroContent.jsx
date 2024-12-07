import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "../../utils";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer & Data Scientist Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Full Stack Developer{" "}
            </span>
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">
              {" "}
              Data Science{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 max-w-[600px]"
        >
          I&apos;m Full Stack Software Engineer and Data Scientist with strong
          expertise in backend and frontend development, as well as machine
          learning and deep learning
        </motion.p>

        <motion.a
          href="/__ANDRES_CV.pdf" // Ruta a tu archivo PDF
          target="_blank" // Abre en nueva pestaña
          rel="noopener noreferrer" // Buena práctica de seguridad
          variants={slideInFromLeft(1)}
          className="py-2 bg-[#7042f8] text-center text-white cursor-pointer rounded-lg max-w-[200px] hover:bg-[#8042f8] animate-bounce"
          download="CV_ANDRES_SOSA.pdf"
        >
          Download My Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <img
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

