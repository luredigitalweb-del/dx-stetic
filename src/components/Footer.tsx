import { Instagram, MessageCircle, MapPin } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

const FOOTER_WA = whatsappLink("Olá DX Stetic! Quero agendar meu carro.");

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-2xl bg-white p-2.5">
                <img
                  src="/logo-dx-red.png"
                  alt="DX Stetic"
                  className="h-8 w-auto"
                  loading="lazy"
                />
              </span>
              <span className="font-display text-2xl font-extrabold uppercase tracking-[0.15em] text-white">
                Stetic
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              Estúdio automotivo em Fortaleza/CE. Vitrificação e lavagem premium
              com acompanhamento em tempo real.
            </p>
          </div>

          {/* Contato */}
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white/80">
              Contato
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <a
                  href={FOOTER_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-brand-red-light"
                >
                  <MessageCircle className="h-4 w-4" />
                  (85) 98801-3579
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/lavajatodxstetic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-brand-red-light"
                >
                  <Instagram className="h-4 w-4" />
                  @lavajatodxstetic
                </a>
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white/80">
              Endereço
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Av. Padre Paulino, 490 — Cajazeiras
              <br />
              Fortaleza/CE · Seg–Sáb, 8h–17h
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/45">
            © {2026} DX Stetic — Estúdio Automotivo · Fortaleza/CE
          </p>
          <p className="text-xs text-white/45">
            Desenvolvido por{" "}
            <span className="font-semibold text-white/70">Lure Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
