"use client";
import { motion } from "framer-motion";

// Komponen Pembungkus Utama (Parent)
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

// Komponen Anak (Child)
export const FadeIn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
