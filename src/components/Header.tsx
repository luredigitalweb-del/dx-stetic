import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/utils";

const NAV = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Localização", href: "#localizacao" },
];

const HEADER_WA = whatsappLink(
  "Olá! Vi o site da DX Stetic e quero falar agora."
);

function Brand() {
  return (
    <a
      href="#topo"
      className="flex items-center gap-2.5"
      aria-label="DX Stetic — início"
    >
      <img
        src="/logo-dx-red.png"
        alt="DX Stetic"
        className="h-9 w-auto sm:h-10"
        loading="eager"
      />
      <span className="hidden h-6 w-px bg-brand-line sm:block" />
      <span className="hidden font-display text-base font-bold uppercase leading-none tracking-[0.15em] text-brand-ink sm:block">
        Stetic
      </span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-page pt-4 sm:pt-5">
        {/* Pílula branca flutuante */}
        <div
          className={`flex h-16 items-center justify-between rounded-full border border-brand-line bg-white px-3 pl-5 transition-shadow duration-300 sm:bg-white/95 sm:backdrop-blur-md ${
            scrolled ? "shadow-soft" : "shadow-[0_8px_30px_-12px_rgba(20,20,22,0.25)]"
          }`}
        >
          <Brand />

          {/* Nav desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-ink-soft transition-colors hover:text-brand-red"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + menu mobile */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden sm:inline-flex"
              size="default"
              aria-label="Falar agora pelo WhatsApp"
            >
              <a href={HEADER_WA} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Falar agora
              </a>
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full text-brand-ink transition-colors hover:bg-brand-cloud md:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="mt-2 overflow-hidden rounded-3xl border border-brand-line bg-white p-3 shadow-soft md:hidden"
            >
              <div className="flex flex-col gap-1">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-brand-ink transition-colors hover:bg-brand-cloud"
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="mt-2 w-full"
                  aria-label="Falar agora pelo WhatsApp"
                >
                  <a href={HEADER_WA} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Falar agora
                  </a>
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
