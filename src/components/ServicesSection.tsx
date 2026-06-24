import { motion } from "framer-motion";
import {
  RefreshCw,
  Sparkles,
  Shield,
  Sun,
  SprayCan,
  Gem,
  Wrench,
  Check,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LazyVideo } from "@/components/ui/lazy-video";
import { whatsappLink } from "@/lib/utils";
import { fadeUp, staggerContainer, inViewOptions } from "@/lib/motion";
import { IMAGES } from "@/lib/images";

interface Featured {
  icon: LucideIcon;
  image: string;
  video?: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
}

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURED: Featured[] = [
  {
    icon: Sparkles,
    image: IMAGES.vitrificacao,
    video: "/vitrificacao.mp4",
    tag: "Mais procurado",
    title: "Vitrificação",
    description:
      "Proteção duradoura para a pintura, com brilho intenso e repelência à água e sujeira.",
    features: ["Dura até 3 anos", "Brilho profundo", "Realça a cor original"],
  },
  {
    icon: Shield,
    image: IMAGES.lavagem,
    video: "/ppf.mp4",
    tag: "Proteção máxima",
    title: "PPF",
    description:
      "Película de proteção que blinda a pintura contra riscos, pedras e o dia a dia.",
    features: [
      "Protege contra riscos",
      "Acabamento invisível",
      "Mantém a pintura nova",
    ],
  },
];

const SERVICES: Service[] = [
  {
    icon: RefreshCw,
    title: "Lavagens Rotativas",
    description:
      "Lavagem completa e periódica para manter seu carro sempre impecável.",
  },
  {
    icon: Sun,
    title: "Películas Térmicas",
    description:
      "Mais conforto e privacidade, com proteção contra o calor e o sol.",
  },
  {
    icon: SprayCan,
    title: "Higienização",
    description:
      "Limpeza profunda de bancos, estofados e todo o interior do veículo.",
  },
  {
    icon: Gem,
    title: "Polimento",
    description: "Remove riscos finos e devolve o brilho original da pintura.",
  },
  {
    icon: Wrench,
    title: "Limpeza de Motor",
    description: "Motor limpo e conservado, com cuidado técnico e seguro.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-gradient-to-b from-brand-red to-brand-red-dark"
    >
      {/* textura de pontos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.85) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="container-page relative py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOptions}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge variant="onDark" className="mb-4">
            Nossos serviços
          </Badge>
          <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
            O Que Fazemos pelo Seu Carro
          </h2>
          <p className="mt-4 text-base text-white/85">
            Estética e proteção automotiva completas, do básico ao alto nível.
          </p>
        </motion.div>

        {/* Destaques com foto */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={inViewOptions}
          className="mt-14 grid gap-7 md:grid-cols-2"
        >
          {FEATURED.map((service) => {
            const Icon = service.icon;
            const wa = whatsappLink(
              `Olá! Quero saber sobre ${service.title} na DX Stetic.`
            );
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex flex-col overflow-hidden rounded-[26px] bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] ring-1 ring-black/5"
              >
                <div className="relative h-60 overflow-hidden">
                  {service.video ? (
                    <LazyVideo
                      src={service.video}
                      poster={service.image}
                      aria-label={`Vídeo: ${service.title}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                    />
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                    />
                  )}
                  {/* gradiente para legibilidade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

                  {/* selo */}
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-red shadow-sm backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                    {service.tag}
                  </span>

                  {/* ícone + título */}
                  <div className="absolute inset-x-5 bottom-5 flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-red text-white shadow-red-glow ring-1 ring-white/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[15px] leading-relaxed text-brand-muted">
                    {service.description}
                  </p>
                  <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-brand-line to-transparent" />
                  <ul className="mb-7 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm font-medium text-brand-ink"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    size="lg"
                    className="mt-auto w-full"
                    aria-label={`Falar no WhatsApp sobre ${service.title}`}
                  >
                    <a href={wa} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      Quero {service.title}
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Demais serviços */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={inViewOptions}
          className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const wa = whatsappLink(
              `Olá! Quero saber sobre ${service.title} na DX Stetic.`
            );
            return (
              <motion.a
                key={service.title}
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                aria-label={`Falar no WhatsApp sobre ${service.title}`}
                className="group flex items-start gap-4 rounded-2xl border border-brand-line bg-white p-6 shadow-soft transition-colors hover:border-brand-red/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-red/10 transition-colors group-hover:bg-brand-red">
                  <Icon className="h-6 w-6 text-brand-red transition-colors group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-brand-ink">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                    {service.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                    Solicitar
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.a>
            );
          })}

          {/* Card de chamada */}
          <motion.div
            variants={fadeUp}
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-brand-dark p-6 text-white shadow-soft"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight">
                Precisa de outro serviço?
              </h3>
              <p className="mt-1 text-sm text-white/85">
                Fale com a gente e monte o cuidado ideal para o seu carro.
              </p>
            </div>
            <Button
              asChild
              variant="light"
              className="relative mt-5 w-full"
              aria-label="Falar com a DX Stetic pelo WhatsApp"
            >
              <a
                href={whatsappLink(
                  "Olá DX Stetic! Quero falar sobre os serviços de vocês."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Falar agora
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
