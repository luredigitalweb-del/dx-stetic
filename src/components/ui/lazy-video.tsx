import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
}

/**
 * Vídeo que só reproduz enquanto está visível na tela.
 * Pausar vídeos fora do viewport evita decodificação simultânea
 * (3 vídeos ao mesmo tempo travam a página) e mantém a rolagem fluida.
 */
export function LazyVideo({ src, poster, className, ...props }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      className={cn("transform-gpu", className)}
      {...props}
    />
  );
}
