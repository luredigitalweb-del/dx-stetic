import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Faixa de cima: serviços
const SERVICES = [
  "Vitrificação",
  "Lavagem Premium",
  "PPF",
  "Películas Térmicas",
  "Higienização",
  "Polimento",
  "Limpeza de Motor",
];

// Faixa de baixo: diferenciais / informações
const INFO = [
  "Acompanhamento em tempo real",
  "Parcelamos pra você",
  "+100 clientes por mês",
  "6 anos de experiência",
  "Pós-venda garantido",
  "Fortaleza/CE",
  "Seg–Sáb · 8h às 17h",
];

const MASK =
  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";

function Track({
  items,
  variant,
  anim,
}: {
  items: string[];
  variant: "red" | "dark";
  anim: string;
}) {
  // 3 cópias por grupo + 2 grupos => loop perfeito (translateX -50%)
  const group = Array.from({ length: 3 }).flatMap(() => items);
  const sepColor = variant === "red" ? "text-white/55" : "text-brand-red";
  const textColor = variant === "red" ? "text-white" : "text-white/75";

  const Group = () => (
    <div className="flex shrink-0 items-center">
      {group.map((text, i) => (
        <div key={`${text}-${i}`} className="flex items-center">
          <span
            className={`cursor-default px-6 text-sm font-semibold uppercase tracking-[0.18em] transition-transform duration-300 hover:scale-110 ${textColor}`}
          >
            {text}
          </span>
          <Sparkles className={`h-3.5 w-3.5 ${sepColor}`} strokeWidth={2.5} />
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`flex w-max shrink-0 transform-gpu ${anim} group-hover:[animation-play-state:paused]`}
    >
      <Group />
      <Group />
    </div>
  );
}

export function MarqueeBand() {
  const reduce = useReducedMotion();

  return (
    <section
      id="faixa"
      aria-hidden="true"
      className="group relative overflow-hidden bg-brand-dark"
    >
      <div
        style={{ maskImage: MASK, WebkitMaskImage: MASK }}
        className="flex flex-col"
      >
        {/* Faixa vermelha — serviços */}
        <div className="relative flex overflow-hidden bg-gradient-to-r from-brand-red-dark via-brand-red to-brand-red-dark py-4 shadow-red-glow">
          {/* brilho interno topo/base p/ profundidade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/15"
          />
          {/* feixe de luz que varre a faixa */}
          {!reduce && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 z-10 w-32 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-20%" }}
              animate={{ x: "120vw" }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          )}
          <Track items={SERVICES} variant="red" anim="animate-marquee" />
        </div>

        {/* Faixa escura — diferenciais */}
        <div className="relative flex overflow-hidden border-t border-white/5 bg-brand-dark-soft py-4">
          {/* linha de brilho vermelho no topo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/60 to-transparent"
          />
          <Track items={INFO} variant="dark" anim="animate-marquee-rev" />
        </div>
      </div>
    </section>
  );
}
