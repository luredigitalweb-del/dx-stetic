import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate as animateValue,
} from "framer-motion";
import { MessageCircle, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { whatsappLink } from "@/lib/utils";
import { useIsMobile } from "@/lib/useIsMobile";

const HERO_WA = whatsappLink(
  "Olá! Vi o site e quero falar com um especialista da DX Stetic."
);

// grão sutil (ruído) para textura premium
const NOISE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

// partículas que sobem (poeira/brilho) — valores fixos p/ ficar determinístico
const PARTICLES = [
  { left: "10%", size: 5, dur: 11, delay: 0 },
  { left: "24%", size: 3, dur: 14, delay: 2.5 },
  { left: "38%", size: 4, dur: 9, delay: 1 },
  { left: "52%", size: 3, dur: 13, delay: 4 },
  { left: "66%", size: 6, dur: 16, delay: 0.8 },
  { left: "78%", size: 3, dur: 10, delay: 3.2 },
  { left: "90%", size: 4, dur: 15, delay: 1.8 },
];

interface Stat {
  value: number | null;
  prefix?: string;
  suffix?: string;
  text?: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 6000, prefix: "+", label: "clientes atendidos" },
  { value: 9, suffix: " anos", label: "de experiência" },
  { value: null, text: "Tempo Real", label: "acompanhamento" },
];

function StatItem({ stat, delay }: { stat: Stat; delay: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => unsub();
  }, [rounded]);

  useEffect(() => {
    if (stat.value === null || !inView) return;
    if (reduce) {
      setDisplay(stat.value);
      return;
    }
    const controls = animateValue(count, stat.value, {
      duration: 1.3,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [inView, count, stat.value, reduce]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <p className="font-display text-3xl font-bold leading-none text-white sm:text-4xl">
        {stat.value === null ? (
          <span className="text-brand-red-light">{stat.text}</span>
        ) : (
          <>
            <span className="text-brand-red-light">{stat.prefix}</span>
            {display}
            {stat.suffix}
          </>
        )}
      </p>
      <p className="mt-1 text-[11px] uppercase tracking-wider text-white/60 sm:text-xs">
        {stat.label}
      </p>
    </motion.div>
  );
}

export function HeroSection() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  // "lite" = sem efeitos contínuos pesados (mobile ou usuário pediu menos animação)
  const lite = reduce || isMobile;

  // Parallax com o mouse (springs = movimento fluido)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 55, damping: 18, mass: 0.4 });
  const glow1X = useTransform(sx, (v) => v * 45);
  const glow1Y = useTransform(sy, (v) => v * 45);
  const glow2X = useTransform(sx, (v) => v * -55);
  const glow2Y = useTransform(sy, (v) => v * -35);
  const contentX = useTransform(sx, (v) => v * 14);
  const contentY = useTransform(sy, (v) => v * 10);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (reduce) return;
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    },
    [mx, my, reduce]
  );

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  };

  return (
    <section
      id="topo"
      onMouseMove={onMouseMove}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-brand-dark"
    >
      {/* ===== FUNDO ===== */}
      {/* Foto preenchendo o banner, com zoom cinematográfico (Ken Burns) */}
      <img
        src="/banner-2.png"
        alt="Estúdio da DX Stetic em Fortaleza"
        loading="eager"
        fetchPriority="high"
        className={`absolute inset-0 -z-30 h-full w-full object-cover object-center ${
          lite ? "" : "animate-kenburns"
        }`}
      />
      {/* Blend horizontal: preto à esquerda → foto à direita */}
      <div
        className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,#0E0E10_0%,#0E0E10_34%,rgba(14,14,16,0.85)_50%,rgba(14,14,16,0.25)_72%,transparent_90%)]"
        aria-hidden="true"
      />
      {/* Vinheta topo/base */}
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-b from-brand-dark/70 via-transparent to-brand-dark"
        aria-hidden="true"
      />
      {/* Escurecimento extra no mobile */}
      <div
        className="absolute inset-0 -z-20 bg-brand-dark/45 lg:bg-transparent"
        aria-hidden="true"
      />

      {/* Glows + grão — só no desktop (blurs grandes derrubam o FPS no mobile) */}
      {!lite && (
        <>
          <motion.div
            className="pointer-events-none absolute -left-24 top-1/4 -z-10 h-[28rem] w-[28rem] transform-gpu rounded-full bg-brand-red/25 blur-[130px]"
            aria-hidden="true"
            style={{ x: glow1X, y: glow1Y }}
            animate={{ opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-80 w-80 transform-gpu rounded-full bg-brand-red/20 blur-[120px]"
            aria-hidden="true"
            style={{ x: glow2X, y: glow2Y }}
            animate={{ opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          {/* Grão */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay"
            style={{ backgroundImage: `url("${NOISE}")` }}
            aria-hidden="true"
          />
        </>
      )}

      {/* Varredura de luz diagonal (shine) */}
      {!lite && (
        <motion.div
          className="pointer-events-none absolute inset-y-0 -z-10 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          aria-hidden="true"
          initial={{ x: "-60%" }}
          animate={{ x: "360%" }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: 4.5,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Partículas subindo */}
      {!lite && (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          {PARTICLES.map((p, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-brand-red-light/60 blur-[1px]"
              style={{
                left: p.left,
                bottom: -12,
                height: p.size,
                width: p.size,
              }}
              animate={{ y: [0, -560], opacity: [0, 0.9, 0] }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* ===== CONTEÚDO ===== */}
      <div className="container-page flex flex-1 flex-col justify-center pb-24 pt-32 sm:pb-28 sm:pt-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ x: contentX, y: contentY }}
          className="max-w-2xl lg:max-w-[600px]"
        >
          <motion.div variants={item}>
            <Badge variant="onDark" className="mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red-light" />
              Estética Automotiva Premium · Fortaleza/CE
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[46px] font-bold uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Seu Carro Merece{" "}
            <span className="relative inline-block">
              <span
                className="relative z-10 text-brand-red-light"
                style={{ textShadow: "0 0 34px rgba(225,20,20,0.55)" }}
              >
                Tratamento
              </span>
              {/* sublinhado animado */}
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 h-[6px] w-full origin-left rounded-full bg-gradient-to-r from-brand-red to-brand-red-light"
              />
            </span>{" "}
            de Alto Nível
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Vitrificação profissional e lavagem premium com acompanhamento em
            tempo real pelo WhatsApp. Resultado garantido, do começo ao fim.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <div className="relative">
              {/* brilho pulsante atrás do CTA */}
              {!reduce && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 animate-cta-pulse rounded-full bg-brand-red blur-xl"
                />
              )}
              <Button
                asChild
                size="lg"
                aria-label="Falar com um especialista pelo WhatsApp"
              >
                <a href={HERO_WA} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Falar com um especialista
                </a>
              </Button>
            </div>
            <Button asChild variant="outlineLight" size="lg">
              <a href="#servicos" aria-label="Ver serviços">
                Ver serviços
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Números */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/15 pt-8"
          >
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} delay={0.6 + i * 0.12} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#servicos"
        aria-label="Rolar para ver os serviços"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-white/55 transition-colors hover:text-white sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
          Role para ver
        </span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 7, 0] }}
          transition={
            reduce ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
