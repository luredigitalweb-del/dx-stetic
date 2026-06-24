import { motion } from "framer-motion";
import { MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/utils";
import { inViewOptions } from "@/lib/motion";
import { IMAGES } from "@/lib/images";

const CTA_WA = whatsappLink(
  "Olá DX Stetic! Quero agendar meu carro. Pode me ajudar?"
);

export function CtaSection() {
  return (
    <section className="bg-brand-paper">
      <div className="container-page py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOptions}
          transition={{ duration: 0.5 }}
          className="relative isolate overflow-hidden rounded-[2rem] bg-brand-red px-6 py-16 text-center shadow-red-glow sm:px-12 sm:py-20"
        >
          {/* Foto sutil ao fundo */}
          <img
            src={IMAGES.accent}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 mix-blend-overlay"
          />
          <div
            className="absolute inset-0 -z-10 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden="true"
          />

          <h2 className="mx-auto max-w-2xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
            Agende Hoje. Seu Carro Agradece Amanhã.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Atendemos até 100 carros por mês. Garanta sua vaga antes de lotar.
          </p>

          <div className="mt-10 flex flex-col items-center">
            <Button
              asChild
              variant="light"
              size="xl"
              aria-label="Falar com a DX Stetic agora pelo WhatsApp"
            >
              <a href={CTA_WA} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6" />
                Falar com a DX Stetic agora
              </a>
            </Button>

            <p className="mt-5 flex items-center gap-2 text-sm text-white/75">
              <Clock className="h-4 w-4" />
              Segunda a Sábado · 8h às 17h
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
