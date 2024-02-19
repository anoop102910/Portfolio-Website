export const slideVariants = {
  hidden: { x: -1000, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const imageVariant = {
  hidden: { opacity: 0, scale: 0.3, x: 100, y: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

export const backInLeftVariants = {
  hidden: { opacity: 0, x: -1000 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.5, delay: 0.6, ease: "easeInOut" },
  },
};
export const scaleFromBottom = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1.5, delay: 0.6, ease: "easeInOut" } },
};

export const bottomInUpVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
        delay: 0.4,
        duration: 1,
      },
  },
};
export const backInLeftVariant = {
  hidden: { opacity: 0, x: -1000 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 16,
      delay: 0.4,
      duration: 1,
    },
  },
};

export const backInRightVariant = {
  hidden: { opacity: 0, x: 1000 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 16,
      delay: 0.4,
    },
  },
};

export const backInBottomVariant = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};
