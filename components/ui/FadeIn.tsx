"use client";
import { motion } from "framer-motion";

export const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInStagger = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true }} memastikan animasi hanya jalan sekali
      // saat elemen terlihat di layar, tidak berulang-ulang
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15, // Ini kunci utamanya: jeda 0.15 detik antar elemen
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
