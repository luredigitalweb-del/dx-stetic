import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Iphone16Pro } from "@/components/ui/iphone-16-pro";
import { inViewOptions } from "@/lib/motion";

const IG_URL = "https://instagram.com/lavajatodxstetic";

const STATS = [
  { value: "482", label: "posts" },
  { value: "7.127", label: "seguidores" },
  { value: "#1", label: "em Fortaleza" },
];

export function InstagramSection() {
  const reduce = useReducedMotion();

  // inclina o celular só no desktop; reto no mobile
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section
      id="instagram"
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

      <div className="container-page relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inViewOptions}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <Instagram className="h-4 w-4" />
            @lavajatodxstetic
          </span>

          <h2 className="mt-5 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
            Siga a DX Stetic no Instagram
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/85 lg:mx-0">
            Transformações reais, bastidores e os vídeos que enviamos aos
            clientes. Veja por que somos o mais bem avaliado de Fortaleza.
          </p>

          {/* Stats */}
          <div className="mt-8 flex justify-center gap-8 lg:justify-start">
            {STATS.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="font-display text-3xl font-bold leading-none text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-white/65">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex justify-center lg:justify-start">
            <Button
              asChild
              variant="light"
              size="lg"
              aria-label="Seguir a DX Stetic no Instagram"
            >
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                Seguir no Instagram
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* iPhone */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOptions}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-1 flex justify-center lg:order-2"
        >
          {/* glow atrás do celular */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-black/30 blur-3xl"
            />
            <motion.a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Instagram da DX Stetic"
              className="block"
              animate={reduce || !isDesktop ? undefined : { y: [0, -12, 0] }}
              transition={
                reduce || !isDesktop
                  ? undefined
                  : { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }
              whileHover={{ scale: 1.03, rotate: 0 }}
              style={{ rotate: isDesktop ? -3 : 0 }}
            >
              <Iphone16Pro
                src="/instagram.png"
                className="h-auto w-[260px] sm:w-[300px]"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
