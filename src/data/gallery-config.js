// ═══════════════════════════════════════════════════════════
// CONFIGURATION DE LA GALERIE DU HERO — Enzo Tofani
// À chaque rafraîchissement de page, une œuvre et un cadre
// sont tirés au sort dans les listes ci-dessous.
// ═══════════════════════════════════════════════════════════

/**
 * LISTE DES ŒUVRES (Tableaux de fond du Hero — 100% Domaine Public / CC0)
 * Déposez vos images dans `public/gallery/artworks/` et ajoutez-les ici.
 */
export const artworks = [
  {
    id: 'monet-nympheas-1906',
    artist: 'Claude Monet',
    title: 'Les Nymphéas',
    year: '1906',
    image: 'gallery/artworks/monet-nympheas-1906.jpg',
  },
  {
    id: 'monet-pont-japonais',
    artist: 'Claude Monet',
    title: 'Le Bassin aux nymphéas (Le Pont japonais)',
    year: '1899',
    image: 'gallery/artworks/the_japanese_footbridge_monet.jpg',
  },
  {
    id: 'monet-impression-1872',
    artist: 'Claude Monet',
    title: 'Impression, soleil levant',
    year: '1872',
    image: 'gallery/artworks/monet-impression-1872.jpg',
  },
  {
    id: 'vangogh-irises-1890',
    artist: 'Vincent van Gogh',
    title: 'Les Iris',
    year: '1890',
    image: 'gallery/artworks/vangogh-irises-1890.jpg',
  },
  {
    id: 'redon-vase-flowers',
    artist: 'Odilon Redon',
    title: 'Vase étrusque aux fleurs',
    year: '1900–1910',
    image: 'gallery/artworks/redon-vase-flowers.jpg',
  },
  {
    id: 'hokusai-great-wave',
    artist: 'Katsushika Hokusai',
    title: 'La Grande Vague de Kanagawa',
    year: 'v. 1830–1832',
    image: 'gallery/artworks/hokusai-great-wave.jpg',
  },
];

/**
 * LISTE DES CADRES (Frames de tableau autour de la découpe du Hero)
 * - Pour utiliser vos propres cadres PNG/WebP (centre transparent) :
 *   déposez-les dans `public/gallery/frames/` puis renseignez
 *   `image: 'gallery/frames/mon-cadre.png'` et ajustez `inset` si besoin.
 */
export const frames = [
  {
    id: 'orsay-gold',
    name: 'Dorure Classique Orsay',
    image: null,
    styleClass: 'orsay-gold',
    inset: '-22px',
  },
  {
    id: 'louvre-bronze',
    name: 'Bronze Patiné & Passe-Partout',
    image: null,
    styleClass: 'louvre-bronze',
    inset: '-22px',
  },
  {
    id: 'ebony-amethyst',
    name: 'Ébène & Filet Émeraude',
    image: null,
    styleClass: 'ebony-amethyst',
    inset: '-20px',
  },
  {
    id: 'modern-gallery',
    name: 'Caisse Américaine Galerie',
    image: null,
    styleClass: 'modern-gallery',
    inset: '-16px',
  },

  // ── EXEMPLE POUR AJOUTER VOS PROPRES CADRES PNG ──
  // {
  //   id: 'cadre-baroque-png',
  //   name: 'Cadre Baroque Doré',
  //   image: 'gallery/frames/cadre-baroque.png',
  //   inset: '-28px',
  // },
];

/**
 * Construit une URL valide en local (dev) comme sur GitHub Pages (/portfolio/)
 */
export function resolveGalleryAsset(relativePath) {
  if (!relativePath) return null;
  if (/^https?:\/\//i.test(relativePath)) return relativePath;
  const base = import.meta.env.BASE_URL || '/';
  const clean = relativePath.replace(/^\/+/, '');
  return `${base}${clean}`;
}
