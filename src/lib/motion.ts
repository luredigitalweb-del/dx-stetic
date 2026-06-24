import type { Variants } from "framer-motion";

/** Container com stagger entre filhos — usado em entradas de seção. */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/** Item que sobe e aparece (fade-up). */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

/** Viewport padrão para useInView/whileInView. */
export const inViewOptions = { once: true, amount: 0.3 } as const;
