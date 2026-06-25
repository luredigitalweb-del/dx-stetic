import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Navigation,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/utils";
import { inViewOptions } from "@/lib/motion";

const MAPS_DIR =
  "https://www.google.com/maps/dir/?api=1&destination=Lava+Jato+Dx+Stetic,+Av.+Padre+Paulino,+490+-+Cajazeiras,+Fortaleza+-+CE";

const LOC_WA = whatsappLink(
  "Olá DX Stetic! Quero agendar um horário. Como faço pra chegar até vocês?"
);

export function LocationSection() {
  return (
    <section id="localizacao" className="bg-brand-paper">
      <div className="container-page py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOptions}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge className="mb-4">Localização</Badge>
          <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight text-brand-ink sm:text-5xl">
            Onde Nos Encontrar
          </h2>
          <p className="mt-4 text-base text-brand-muted">
            Estamos no coração de Fortaleza, prontos pra cuidar do seu carro.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOptions}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-[28px] border border-brand-line bg-white shadow-soft lg:grid lg:grid-cols-[400px_1fr]"
        >
          {/* Painel de informações */}
          <div className="relative flex flex-col gap-7 overflow-hidden bg-brand-dark p-8 text-white sm:p-10">
            {/* glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-red/30 blur-3xl"
            />

            <div className="relative">
              <span className="font-display text-3xl font-extrabold uppercase tracking-tight">
                DX <span className="text-brand-red-light">Stetic</span>
              </span>
              <p className="mt-1 text-sm text-white/60">
                Estúdio automotivo · Fortaleza/CE
              </p>
            </div>

            <div className="relative flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-red/15">
                <MapPin className="h-5 w-5 text-brand-red-light" />
              </span>
              <div>
                <p className="font-display text-base font-bold uppercase tracking-wide">
                  Endereço
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/65">
                  Av. Padre Paulino, 490 — Cajazeiras
                  <br />
                  CEP 60864-240 — Fortaleza/CE
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-red/15">
                <Clock className="h-5 w-5 text-brand-red-light" />
              </span>
              <div>
                <p className="font-display text-base font-bold uppercase tracking-wide">
                  Horário
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/65">
                  Segunda a Sábado · 8h às 17h
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-red/15">
                <Instagram className="h-5 w-5 text-brand-red-light" />
              </span>
              <div>
                <p className="font-display text-base font-bold uppercase tracking-wide">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/lavajatodxstetic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-white/65 transition-colors hover:text-brand-red-light"
                >
                  @lavajatodxstetic
                </a>
              </div>
            </div>

            <div className="relative mt-auto flex flex-col gap-3 pt-2">
              <Button asChild variant="whatsapp" className="w-full">
                <a href={LOC_WA} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button asChild variant="outlineLight" className="w-full">
                <a href={MAPS_DIR} target="_blank" rel="noopener noreferrer">
                  <Navigation className="h-4 w-4" />
                  Traçar rota
                </a>
              </Button>
            </div>
          </div>

          {/* Mapa */}
          <div className="relative min-h-[360px] lg:min-h-full">
            <iframe
              title="Localização da DX Stetic no Google Maps"
              src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!3m2!1m1!4s9669759505934496140"
              className="absolute inset-0 h-full w-full"
              style={{ border: "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
