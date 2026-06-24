import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

const FAB_WA = whatsappLink(
  "Olá DX Stetic! Quero falar agora sobre meu carro."
);

export function WhatsAppFAB() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hover && (
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none hidden rounded-lg bg-brand-surface px-3 py-2 text-sm font-medium text-brand-white shadow-lg ring-1 ring-brand-border sm:block"
          >
            Falar Agora
          </motion.span>
        )}
      </AnimatePresence>

      <motion.a
        href={FAB_WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar agora pelo WhatsApp"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        animate={reduce ? undefined : { scale: [1, 1.1, 1] }}
        transition={
          reduce
            ? undefined
            : { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-neon text-black shadow-lg shadow-brand-neon/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
      >
        <MessageCircle className="h-7 w-7" />
      </motion.a>
    </div>
  );
}
