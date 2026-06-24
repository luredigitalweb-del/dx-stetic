import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Droplets,
  Trophy,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { whatsappLink } from "@/lib/utils";
import { fadeUp, staggerContainer, inViewOptions } from "@/lib/motion";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Building2,
    title: "Estúdio completo e estruturado",
    description:
      "Estrutura premium em Fortaleza, equipada para cuidar do popular ao esportivo com padrão de estúdio.",
  },
  {
    icon: ShieldCheck,
    title: "Especialistas em proteção",
    description:
      "PPF e vitrificação são a nossa especialidade — proteção que preserva a pintura por anos.",
  },
  {
    icon: Droplets,
    title: "Do exterior ao interior",
    description:
      "Polimento, higienização, películas e limpeza de motor. O veículo inteiro cuidado num só lugar.",
  },
  {
    icon: Trophy,
    title: "9 anos, +6000 clientes atendidos",
    description:
      "Histórico consolidado e uma base de clientes que volta e indica. Qualidade que se sustenta.",
  },
];

const ABOUT_WA = whatsappLink(
  "Olá DX Stetic! Quero cuidar do meu carro com vocês."
);

export function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-brand-paper">
      <div className="container-page py-20 sm:py-28">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOptions}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge className="mb-4">Sobre nós</Badge>
          <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight text-brand-ink sm:text-5xl">
            Mais que uma lavagem, um{" "}
            <span className="text-brand-red">tratamento</span>
            <span className="text-brand-red">.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-brand-muted">
            Há 9 anos cuidando de veículos em Fortaleza com produtos
            profissionais, técnica atualizada e atenção a cada detalhe.
          </p>
        </motion.div>

        {/* Conteúdo */}
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inViewOptions}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-3xl shadow-soft ring-1 ring-black/5"
          >
            <img
              src="/sobre.png"
              alt="Estúdio da DX Stetic em Fortaleza"
              loading="lazy"
              className="h-full max-h-[560px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-ink shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Estúdio em Fortaleza/CE
            </span>
          </motion.div>

          {/* Lista + CTA */}
          <div className="flex flex-col">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={inViewOptions}
              className="flex flex-col gap-7"
            >
              {FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    variants={fadeUp}
                    className="group flex gap-4"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-red/10 transition-colors duration-300 group-hover:bg-brand-red">
                      <Icon className="h-6 w-6 text-brand-red transition-colors duration-300 group-hover:text-white" />
                    </span>
                    <div>
                      <h3 className="font-body text-lg font-bold text-brand-ink">
                        {f.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                        {f.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Card CTA escuro */}
            <motion.a
              href={ABOUT_WA}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewOptions}
              transition={{ duration: 0.5, delay: 0.2 }}
              aria-label="Falar no WhatsApp com a DX Stetic"
              className="group mt-8 flex items-center justify-between gap-4 rounded-2xl bg-brand-dark p-5 shadow-soft transition-colors hover:bg-brand-dark-soft"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-red text-white shadow-red-glow">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-red-light">
                    Clientes atendidos
                  </p>
                  <p className="font-display text-lg font-bold uppercase leading-tight tracking-tight text-white">
                    Junte-se aos +6000 clientes que confiam na DX Stetic
                  </p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-brand-red-light transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
