import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Número de WhatsApp da DX Stetic (formato internacional, somente dígitos). */
export const WHATSAPP_NUMBER = "5585988013579";

/** Monta um link wa.me com mensagem pré-preenchida. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
