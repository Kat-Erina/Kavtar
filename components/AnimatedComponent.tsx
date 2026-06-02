"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  direction?: "left" | "right";
};

export default function AnimatedComponent({ children, direction = "left" }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}