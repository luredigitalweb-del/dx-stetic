import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { inViewOptions } from "@/lib/motion";

interface Review {
  name: string;
  text: string;
  color: string;
}

// Depoimentos de exemplo — substituir pelos reviews reais do Google.
const REVIEWS: Review[] = [
  {
    name: "Lucas Andrade",
    color: "#E11414",
    text: "Levei meu carro pra vitrificação e ficou impecável. Brilho de concessionária! Atendimento nota 10.",
  },
  {
    name: "Mariana Sousa",
    color: "#1B8EF8",
    text: "Melhor estúdio automotivo de Fortaleza. Acompanhei tudo pelo WhatsApp, super profissionais.",
  },
  {
    name: "Rafael Moreira",
    color: "#22C55E",
    text: "Fiz o PPF e valeu cada centavo. A pintura ficou protegida e o acabamento perfeito.",
  },
  {
    name: "Camila Rocha",
    color: "#A855F7",
    text: "Higienização interna excelente, meu carro ficou cheirando a novo. Recomendo demais!",
  },
  {
    name: "Bruno Oliveira",
    color: "#F59E0B",
    text: "Pontuais, caprichosos e preço justo. Já virei cliente fiel da DX Stetic.",
  },
  {
    name: "Thiago Lima",
    color: "#EC4899",
    text: "O polimento tirou todos os riscos. Parece que saiu da loja. Profissionais de verdade.",
  },
  {
    name: "Aline Ferreira",
    color: "#0EA5E9",
    text: "Atendimento maravilhoso e resultado surpreendente. Voltarei com certeza!",
  },
  {
    name: "Diego Pinheiro",
    color: "#14B8A6",
    text: "Equipe atenciosa, serviço rápido e bem feito. O mais bem avaliado de Fortaleza mesmo!",
  },
];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="mr-5 flex w-[330px] shrink-0 flex-col rounded-2xl border border-brand-line bg-white p-6 shadow-soft sm:w-[360px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
          ))}
        </div>
        <GoogleG className="h-5 w-5" />
      </div>

      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-brand-ink-soft">
        “{review.text}”
      </p>

      <div className="mt-6 flex items-center gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold text-white"
          style={{ backgroundColor: review.color }}
        >
          {review.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-bold text-brand-ink">{review.name}</p>
          <p className="text-xs text-brand-muted">Avaliação no Google</p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="group overflow-hidden bg-brand-cloud py-20 sm:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOptions}
        transition={{ duration: 0.5 }}
        className="container-page text-center"
      >
        <Badge className="mb-4">Depoimentos</Badge>
        <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight text-brand-ink sm:text-5xl">
          O Que Dizem Nossos Clientes
        </h2>
        <div className="mt-4 flex items-center justify-center gap-2 text-brand-muted">
          <GoogleG className="h-5 w-5" />
          <span className="text-sm font-medium">
            <span className="font-bold text-brand-ink">4,9</span> de 5 ·
            avaliações reais do Google
          </span>
        </div>
      </motion.div>

      {/* Carrossel contínuo */}
      <div
        className="relative mt-14"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee transform-gpu group-hover:[animation-play-state:paused]">
          <div className="flex shrink-0">
            {REVIEWS.map((r, i) => (
              <ReviewCard key={`a-${i}`} review={r} />
            ))}
          </div>
          <div className="flex shrink-0" aria-hidden="true">
            {REVIEWS.map((r, i) => (
              <ReviewCard key={`b-${i}`} review={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
