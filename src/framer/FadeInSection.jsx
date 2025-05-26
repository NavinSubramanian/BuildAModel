import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInSection = ({ children, className = "", animationType = "fade-in" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation presets
  const variants = {
    "fade-in": { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
    "slide-left": { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } },
    "slide-right": { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } },
    "slide-up": { initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } },
  };

  const { initial, animate } = variants[animationType] || variants["fade-in"];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? animate : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
