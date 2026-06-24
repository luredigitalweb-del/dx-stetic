import { useEffect, useState } from "react";

/**
 * Retorna true em telas pequenas (mobile/tablet).
 * Usado para desligar efeitos visuais contínuos pesados (blurs grandes,
 * partículas, Ken Burns) que derrubam o FPS em aparelhos mais fracos.
 */
export function useIsMobile(query = "(max-width: 1023px)") {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return isMobile;
}
