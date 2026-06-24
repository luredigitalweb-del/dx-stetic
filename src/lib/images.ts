/**
 * Imagens (Unsplash) usadas na landing.
 * URLs diretas e estáveis — carregadas via CDN.
 */
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  // Banner principal — detalhamento / lavagem
  hero: u("photo-1607860108855-64acf2078ed9", 1800),
  // Vitrificação — carro com brilho / pintura
  vitrificacao: u("photo-1503376780353-7e6692767b70", 1000),
  // Lavagem premium — espuma / lavagem
  lavagem: u("photo-1552519507-da3b142c6e3d", 1000),
  // Bloco de destaque / CTA
  accent: u("photo-1601362840469-51e4d8d58785", 1400),
};
