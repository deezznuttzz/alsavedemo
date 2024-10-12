"use client"

import React from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-[300px] md:max-w-[350px] h-auto mx-auto w-full border-4 border-[#6C6C6C] p-2 md:p-4 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-auto w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 p-4 flex flex-col items-center justify-center">
        <img
          src="/path-to-image.jpg"
          alt="example"
          className="w-full max-h-[150px] object-contain"
        />
        {children}
      </div>
    </motion.div>
  );
};
