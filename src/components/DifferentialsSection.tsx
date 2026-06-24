import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Smartphone,
  CreditCard,
  ShieldCheck,
  MapPin,
  Car,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { inViewOptions } from "@/lib/motion";
import { useIsMobile } from "@/lib/useIsMobile";

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

const DIFFERENTIALS: Differential[] = [
  {
    icon: Smartphone,
    title: "Acompanhamento em Tempo Real",
    description:
      "Você recebe fotos e atualizações pelo WhatsApp enquanto seu carro é tratado.",
  },
  {
    icon: CreditCard,
    title: "Parcelamos pra Você",
    description:
      "Cuide do seu carro sem comprometer o orçamento. Parcelamos o serviço.",
  },
  {
    icon: ShieldCheck,
    title: "Pós-Venda Garantido",
    description:
      "Nosso compromisso não termina quando você sai. Acompanhamos o resultado depois.",
  },
  {
    icon: MapPin,
    title: "Fácil de Encontrar",
    description: "Av. Padre Paulino, 490 · Cajazeiras, Fortaleza/CE · Seg–Sáb, 8h às 17h.",
  },
];

// duração total do "carro passando"
const DRIVE = 2.8;

export function DifferentialsSection() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  // efeitos contínuos (halo, radar, flutuação) só no desktop — mobile mantém só o carro + reveals
  const lite = reduce || isMobile;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="diferenciais" className="relative overflow-hidden bg-brand-cloud">
      {/* brilho ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-red/10 blur-[120px]"
      />

      <div className="container-page relative py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOptions}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge className="mb-4">Por que a DX Stetic</Badge>
          <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight text-brand-ink sm:text-5xl">
            Por que a <span className="text-brand-red">DX Stetic</span> é
            diferente<span className="text-brand-red">.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-brand-muted">
            Quatro pilares que separam a DX Stetic de uma estética comum e fazem
            o cliente voltar sempre.
          </p>
        </motion.div>

        {/* Timeline */}
        <div
          ref={ref}
          className="relative mt-20 grid gap-y-12 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-4 lg:gap-y-0"
        >
          {/* Linha conectora horizontal (desktop) */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{ duration: DRIVE, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-10 hidden h-px origin-left bg-gradient-to-r from-transparent via-brand-red/40 to-transparent lg:block"
          />
          {/* Linha conectora vertical (mobile) */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: inView ? 1 : 0 }}
            transition={{ duration: DRIVE, ease: "easeInOut" }}
            className="absolute bottom-12 left-10 top-10 w-px origin-top -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-red/40 to-transparent sm:hidden"
          />

          {/* Carro passando — DESKTOP (horizontal) */}
          {!reduce && (
            <motion.div
              aria-hidden="true"
              className="absolute top-10 z-20 hidden lg:block"
              style={{ x: "-50%", y: "-50%" }}
              initial={{ left: "-6%", opacity: 0 }}
              animate={inView ? { left: "106%", opacity: [0, 1, 1, 1, 0] } : {}}
              transition={{
                left: { duration: DRIVE, ease: "easeInOut" },
                opacity: {
                  duration: DRIVE,
                  ease: "linear",
                  times: [0, 0.06, 0.5, 0.92, 1],
                },
              }}
            >
              <span className="absolute right-full top-1/2 h-[3px] w-24 -translate-y-1/2 rounded-full bg-gradient-to-l from-brand-red to-transparent" />
              <span className="absolute right-full top-1/2 -mt-2.5 h-[2px] w-14 -translate-y-1/2 rounded-full bg-gradient-to-l from-brand-red/70 to-transparent" />
              <span className="absolute right-full top-1/2 mt-2.5 h-[2px] w-16 -translate-y-1/2 rounded-full bg-gradient-to-l from-brand-red/70 to-transparent" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-[0_0_26px_9px_rgba(225,20,20,0.55)]">
                <Car className="h-7 w-7 -scale-x-100" />
              </span>
            </motion.div>
          )}

          {/* Carro passando — MOBILE (vertical, descendo) */}
          {!reduce && (
            <motion.div
              aria-hidden="true"
              className="absolute left-10 z-20 sm:hidden"
              style={{ x: "-50%", y: "-50%" }}
              initial={{ top: "2%", opacity: 0 }}
              animate={inView ? { top: "98%", opacity: [0, 1, 1, 1, 0] } : {}}
              transition={{
                top: { duration: DRIVE, ease: "easeInOut" },
                opacity: {
                  duration: DRIVE,
                  ease: "linear",
                  times: [0, 0.06, 0.5, 0.92, 1],
                },
              }}
            >
              {/* rastro (acima do carro) */}
              <span className="absolute bottom-full left-1/2 h-20 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-t from-brand-red to-transparent" />
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-white shadow-[0_0_24px_8px_rgba(225,20,20,0.55)]">
                <Car className="h-6 w-6 rotate-90" />
              </span>
            </motion.div>
          )}

          {DIFFERENTIALS.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 28, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: reduce ? 0 : 0.35 + i * 0.6,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group relative z-10 flex items-start gap-5 sm:flex-col sm:items-center sm:gap-0 sm:px-4 sm:text-center"
              >
                {/* número de fundo (desktop) */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-9 left-1/2 -z-0 hidden -translate-x-1/2 select-none font-display text-8xl font-bold leading-none text-brand-red/10 transition-colors duration-300 group-hover:text-brand-red/20 lg:block"
                >
                  0{i + 1}
                </span>

                {/* círculo do ícone */}
                <div className="relative shrink-0">
                  {/* halo pulsante */}
                  {!lite && (
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-red/30 blur-md"
                      animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
                      transition={{
                        duration: 3.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.25,
                      }}
                    />
                  )}
                  {/* anel de pulso (radar) */}
                  {!lite && (
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border-2 border-brand-red"
                      animate={{ scale: [1, 1.7], opacity: [0.6, 0] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: i * 0.4,
                      }}
                    />
                  )}
                  <motion.div
                    className="relative z-10 flex h-20 w-20 transform-gpu items-center justify-center rounded-full bg-brand-dark ring-2 ring-brand-red/60 transition-all duration-300 group-hover:ring-4 group-hover:ring-brand-red"
                    animate={lite ? undefined : { y: [0, -5, 0] }}
                    transition={
                      lite
                        ? undefined
                        : {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2,
                          }
                    }
                  >
                    <Icon className="h-8 w-8 text-brand-red transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>
                </div>

                {/* conteúdo */}
                <div className="pt-1 sm:flex sm:flex-col sm:items-center sm:pt-0">
                  <span className="inline-flex rounded-full border border-brand-red/40 bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-red shadow-sm sm:mt-6">
                    Diferencial 0{i + 1}
                  </span>
                  <h3 className="mt-3 font-body text-lg font-bold text-brand-ink sm:mt-4">
                    {diff.title}
                  </h3>
                  <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-brand-muted">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
