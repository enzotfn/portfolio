// ═══════════════════════════════════════════
// PORTFOLIO DATA — Enzo Tofani
// Édition Française — Dialogue Beaux-Arts & Code
// ═══════════════════════════════════════════

export const personalInfo = {
  name: 'Enzo Tofani',
  title: 'Ingénieur Informatique & Creative Technologist',
  tagline: 'Systèmes bas-niveau, informatique spatiale (XR) & direction visuelle',
  status: 'Stage PFE · 6 Mois · Fév / Mars 2027',
  coordinates: '47°16\'58"N 01°30\'56"W // NANTES',
  bio: (
    <>
      Je conçois des logiciels où l&apos;exigence d&apos;architecture rencontre une véritable sensibilité visuelle. Actuellement en dernière année de cycle ingénieur à Polytech Nantes, je ne vois pas le code comme une mécanique neutre : qu&apos;il s&apos;agisse d&apos;écrire des boucles de paquets bas-niveau en C, d&apos;orchestrer des rigs VR multi-caméras 360° pour la recherche, ou de déployer seul une plateforme de production complète en Espagne.
      <br /><br />
      Nourri par une forte attirance pour les musées, les œuvres d&apos;art classiques et contemporaines, le cinéma et quatre années de mise en scène théâtrale, j&apos;apporte dans l&apos;ingénierie technique un souci constant de la composition, du rythme et de l&apos;immersion.
      <br /><br />
      <span className="bio-focus-label">Objectif :</span> À la recherche d&apos;un stage de fin d&apos;études (PFE) de 6 mois à partir de mi-février ou mars 2027 — orienté ingénierie créative, XR / informatique spatiale ou développement logiciel.
    </>
  ),
  email: 'enzo.tofani@etu.univ-nantes.fr',
  phone: '+33 6 58 39 22 07',
  birthday: '17 Avril 2003',
  location: 'Nantes · Lyon · Nancy (France)',
  social: {
    linkedin: 'https://www.linkedin.com/in/enzotofani/',
    instagram: 'https://www.instagram.com/enzo.tfn/',
    github: 'https://github.com/enzotfn',
    letterboxd: 'https://letterboxd.com/enzotfn/',
  },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13165.93570232979!2d-1.5185640476684572!3d47.2852652433783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805efd6216e050b%3A0xb9ac813651ea9d23!2s%C3%89cole%20polytechnique%20universitaire%20de%20Nantes%20Universit%C3%A9%20(Polytech%20Nantes)!5e1!3m2!1sfr!2sfr!4v1762944101221!5m2!1sfr!2sfr',
};

export const services = [
  {
    id: 'xr',
    title: 'Informatique Spatiale & XR',
    shortDesc: 'Applications VR, flux vidéo 360° synchronisés et lunettes-caméras pour l’immersion.',
    tags: ['Casques VR', 'Caméras 360°', 'Optique', 'R&D'],
  },
  {
    id: 'fullstack',
    title: 'Web & Full-Stack',
    shortDesc: 'Plateformes web livrées en production : backend headless, interfaces rapides et agents IA.',
    tags: ['React 19', 'Vite', 'Strapi', 'Tailwind'],
  },
  {
    id: 'systems',
    title: 'Systèmes & Code Concurrent',
    shortDesc: 'Moteurs physiques en Go, simulations bas-niveau en C et algorithmes de routage en Python.',
    tags: ['C / C++', 'Golang', 'Python', 'Java / Kotlin'],
  },
  {
    id: 'network',
    title: 'Architecture Réseau',
    shortDesc: 'Protocoles distribués, sockets, serveurs Linux et synchronisation temps réel en festival.',
    tags: ['TCP/IP', 'Linux', 'Sockets', 'Android'],
  },
  {
    id: 'direction',
    title: 'Scénographie & Direction Visuelle',
    shortDesc: 'Sensibilité muséale, 4 ans de mise en scène théâtrale et jury de festival de cinéma.',
    tags: ['Mise en Scène', 'Musées', 'Cinéma', 'Direction UI'],
  },
];

export const education = [
  {
    id: 'edu-polytech',
    institution: 'Polytech Nantes — École d’Ingénieurs',
    period: '2024 — 2027',
    location: 'Nantes',
    focus: 'Génie Informatique · Spécialisation Réseaux',
    shortSummary: 'Systèmes d’exploitation, protocoles distribués, programmation concurrente et R&D en réalité virtuelle.',
    highlights: ['Réseaux & Systèmes', 'R&D VR 360°', 'Diplôme Ingénieur 2027'],
  },
  {
    id: 'edu-iut',
    institution: 'IUT de Nantes — Cycle Préparatoire (PeiP)',
    period: '2022 — 2024',
    location: 'Nantes',
    focus: 'Informatique Fondamentale',
    shortSummary: 'Structures de données, POO (Java, Kotlin, C++), bases de données relationnelles et Unix/C.',
    highlights: ['Algorithmique', 'C & Unix', 'Java / Kotlin'],
  },
];

export const experience = [
  {
    id: 'exp-southtours',
    role: 'Développeur Full-Stack (Autonomie complète)',
    company: 'South Tours — Málaga (Espagne)',
    period: 'Mai — Août 2026',
    location: 'Málaga',
    stack: ['React', 'Vite', 'Strapi', 'Agent IA'],
    shortSummary: (
      <>
        Création complète du <a href="https://south.tours" target="_blank" rel="noopener noreferrer">site de production</a> en tant que seul développeur : Strapi, React, webhooks et agent IA conversationnel.
      </>
    ),
  },
  {
    id: 'exp-drillscan',
    role: 'Stage Documentation Logicielle',
    company: 'DrillScan (Helmerich & Payne) — Lyon',
    period: 'Juin — Août 2025',
    location: 'Lyon',
    stack: ['Architecture Doc', 'Migration', 'R&D'],
    shortSummary: 'Refonte et migration de la documentation d’un logiciel scientifique en lien direct avec les développeurs.',
  },
  {
    id: 'exp-bras',
    role: 'Stage Support Systèmes & Réseau',
    company: 'BRAS Immobilier — Nantes',
    period: 'Avril — Juillet 2024',
    location: 'Nantes',
    stack: ['Déploiement', 'SysAdmin', 'Support'],
    shortSummary: 'Déploiement de parc informatique, supervision système et support technique multi-agences.',
  },
  {
    id: 'exp-goupil',
    role: 'Opérateur Polyvalent — Complexe de Loisirs',
    company: 'La Forêt de Goupil — Nancy',
    period: '2019 — 2023',
    location: 'Nancy',
    stack: ['Gestion de Flux', 'Sécurité', 'Maintenance'],
    shortSummary: '4 ans d’encadrement public (laser game, karting, trampoline park) durant les week-ends et vacances.',
  },
];

export const technicalSkills = [
  {
    name: 'React / Vite / CSS Moderne',
    tag: 'Interfaces & Animations',
    tier: 'PRODUCTION',
    context: 'Applications web complètes livrées en production et interfaces spatiales interactives',
    projectsCount: 5,
    level: 90,
  },
  {
    name: 'Full-Stack (Node / Strapi / SQL)',
    tag: 'API & Modèles de Données',
    tier: 'PRODUCTION',
    context: 'Architectures CMS headless, schémas relationnels, API REST et pipelines webhooks',
    projectsCount: 4,
    level: 85,
  },
  {
    name: 'Python & Intégration IA',
    tag: 'Serveurs, Algorithmes & IA',
    tier: 'PRODUCTION / R&D',
    context: 'Serveur de synchronisation festival, routage par graphes, agents IA et outils CLI',
    projectsCount: 5,
    level: 85,
  },
  {
    name: 'C / C++',
    tag: 'Mémoire & Réseau Bas-Niveau',
    tier: 'SYSTÈMES',
    context: 'Simulation d’anneau réseau à paquet unique en C et moteur d’IA heuristique en C++',
    projectsCount: 3,
    level: 80,
  },
  {
    name: 'Linux, Bash & Réseaux',
    tag: 'Spécialité Ingénieur Polytech',
    tier: 'CŒUR DE MÉTIER',
    context: 'Protocoles distribués, serveurs d’impression Linux, routage socket et administration',
    projectsCount: 4,
    level: 80,
  },
  {
    name: 'Golang',
    tag: 'Simulations Concurrentes',
    tier: 'SYSTÈMES',
    context: 'Moteur physique de systèmes de particules 2D en temps réel via goroutines',
    projectsCount: 2,
    level: 75,
  },
  {
    name: 'Kotlin & Android / Java',
    tag: 'Applications Mobiles & Lourdes',
    tier: 'APPLICATIONS',
    context: 'Terminaux mobiles Android de prise de commande en festival et hackathon musée en Java',
    projectsCount: 3,
    level: 75,
  },
];

export const languages = [
  { code: 'FR', name: 'Français', detail: 'Langue maternelle', metric: 'NATIF', bars: 10, level: 100 },
  { code: 'EN', name: 'Anglais', detail: 'Pratique professionnelle en contexte international', metric: '915 TOEIC', bars: 9, level: 88 },
  { code: 'IT', name: 'Italien', detail: 'Bases conversationnelles et culturelles', metric: 'NIVEAU A2 / B1', bars: 5, level: 50 },
];

export const competences = [
  {
    code: 'MIL-01',
    name: 'Théâtre — Acteur & Metteur en Scène',
    detail: '4 années de pratique théâtrale à Nantes avec représentations publiques et direction d’acteurs',
    type: 'ARTS DE LA SCÈNE',
  },
  {
    code: 'MIL-02',
    name: 'Jury de Festival de Cinéma',
    detail: 'Univerciné Nantes — Membre du jury officiel durant 2 éditions (visionnage, débats et remise de prix)',
    type: 'CINÉMA EUROPÉEN',
  },
  {
    code: 'MIL-03',
    name: 'Secouriste en Santé Mentale',
    detail: 'Certificat officiel validé par PSSM France — écoute active et intervention de premier secours',
    type: 'ENGAGEMENT HUMAIN',
  },
  {
    code: 'MIL-04',
    name: 'Histoire de l’Art',
    detail: 'Sensibilité aux œuvres classiques et modernes — certificat validé par Sorbonne Université',
    type: 'CULTURE & MUSÉES',
  },
  {
    code: 'MIL-05',
    name: 'Autonomie Internationale',
    detail: 'Capacité éprouvée à concevoir et livrer seul un produit complet en entreprise à l’étranger',
    type: 'TERRAIN',
  },
  {
    code: 'MIL-06',
    name: 'Maîtrise & Sang-Froid Opérationnel',
    detail: '4 ans d’encadrement du public et de gestion du rythme en complexe de loisirs',
    type: 'OPÉRATIONS',
  },
  {
    code: 'MIL-07',
    name: 'Permis de Conduire (B)',
    detail: 'Mobilité complète depuis novembre 2021',
    type: 'MOBILITÉ',
  },
];

export const projectCategories = [
  'Tous',
  'Applications',
  'Réseau',
  'Développement Web',
  'Web Design',
  'Autres',
];

export const projects = [
  {
    id: 'vr-self-confrontation',
    code: 'PRJ-01',
    title: 'Projet R&D — Réalité Virtuelle & Auto-Confrontation',
    category: 'Applications',
    simType: 'vr360',
    year: '2026 — 2027',
    description:
      'Visualisation immersive multi-points de vue d’une activité pour l’auto-confrontation. Rédaction d’un état de l’art scientifique, puis développement d’une application de réalité virtuelle permettant de visionner des vidéos 360° synchronisées et de basculer d’un angle de vue à l’autre en temps réel (caméras 360° professionnelles, casques VR et lunettes caméra).',
    tech: 'Casques VR · Caméras 360° · Lunettes Caméra',
    specs: ['Flux 360° Synchronisés', 'Bascule de Point de Vue Temps Réel', 'Calibration Matérielle'],
    color: '#6d28d9',
  },
  {
    id: 'nuit-de-lerdre',
    code: 'PRJ-02',
    title: 'Espace Partenaires en Réseau — La Nuit de l’Erdre',
    category: 'Réseau',
    simType: 'network',
    year: '2025 — 2026',
    description:
      'Développement d’une architecture réseau en Python pour synchroniser la prise de commandes depuis des téléphones Android vers des postes de préparation sous Linux, incluant l’impression thermique automatique des bons via une API et une base de données locale.',
    tech: 'Android · API Python · Serveurs Linux',
    specs: ['Terminaux Mobiles Android', 'API REST & Base de Données', 'Impression Automatisée sous Linux'],
    link: 'https://www.lanuitdelerdre.fr',
    color: '#8b5cf6',
  },
  {
    id: 'go-particles',
    code: 'PRJ-03',
    title: 'Moteur de Système de Particules en Go',
    category: 'Applications',
    simType: 'particles',
    year: '2022 — 2023',
    description:
      'Application développée en Golang pour simuler des systèmes de particules physiques en 2D temps réel, exploitant la concurrence pour calculer les vecteurs de vélocité, la gravité et les collisions.',
    tech: 'Golang · Concurrence · Physique 2D',
    specs: ['Exécution Concurrente Go', 'Rendu Temps Réel 60 FPS', 'Champs de Vecteurs Dynamiques'],
    color: '#6d28d9',
  },
  {
    id: 'packet-loop',
    code: 'PRJ-04',
    title: 'Boucle Réseau Locale à Paquet Unique',
    category: 'Réseau',
    simType: 'ring',
    year: '2024 — 2025',
    description:
      'Application bas-niveau écrite en C pur permettant de simuler une boucle réseau locale en anneau dans laquelle circule un unique paquet de données sans perte ni collision.',
    tech: 'Langage C · Sockets · Topologie en Anneau',
    specs: ['Gestion Mémoire en C', 'Routage Déterministe', 'Zéro Perte de Trame'],
    color: '#8b5cf6',
  },
  {
    id: 'poly-sharp',
    code: 'PRJ-05',
    title: 'Poly# — Optimisation de Routage Réseau',
    category: 'Applications',
    simType: 'graph',
    year: '2024 — 2025',
    description:
      'Développement d’un moteur algorithmique en Python chargé de calculer la route optimale et de minimiser la latence pour un opérateur réseau à travers un graphe pondéré.',
    tech: 'Python · Théorie des Graphes · Algorithmes',
    specs: ['Recherche de Plus Court Chemin', 'Topologie Télécom', 'Optimisation de Coût'],
    color: '#b08221',
  },
  {
    id: 'risk-ai',
    code: 'PRJ-06',
    title: 'Intelligence Artificielle sur le Jeu Risk',
    category: 'Applications',
    simType: 'ai',
    year: '2025 — 2026',
    description:
      'Conception d’une intelligence artificielle capable de jouer de manière autonome au jeu de stratégie Risk, combinant la rapidité d’exécution du C++ et la souplesse de Python pour évaluer les probabilités de conquête.',
    tech: 'Python · C++ · Arbres Heuristiques',
    specs: ['Évaluation Probabiliste', 'Cœur C++ / Interface Python', 'Stratégie Autonome'],
    color: '#6d28d9',
  },
  {
    id: 'univercine',
    code: 'PRJ-07',
    title: 'Jury du Festival Univerciné Nantes',
    category: 'Autres',
    simType: 'cinema',
    year: '2024 — 2026',
    description:
      'Membre du jury officiel d’un festival de cinéma européen à Nantes pendant 2 ans. Visionnage de longs-métrages en compétition, délibérations critiques et remise des prix en public.',
    tech: 'Jury Cinéma · Analyse Critique · Culture',
    specs: ['2 Éditions du Festival', 'Sélection Européenne', 'Délibérations & Remise de Prix'],
    link: 'https://www.univercine-nantes.org/',
    color: '#b08221',
  },
  {
    id: 'theater-nantes',
    code: 'PRJ-08',
    title: 'Théâtre — Jeu & Mise en Scène à Nantes',
    category: 'Autres',
    simType: 'stage',
    year: '2023 — 2027',
    description:
      'Quatre années au sein de l’atelier de pratique théâtrale avec représentations publiques, à la fois comme comédien et metteur en scène. Travail de l’espace, du rythme dramaturgique et de la direction de troupe.',
    tech: 'Mise en Scène · Jeu d’Acteur · Scénographie',
    specs: ['4 Saisons & Spectacles Publics', 'Comédien & Metteur en Scène', 'Direction Spatiale'],
    link: 'https://www.univ-nantes.fr/vie-de-campus/culture-sport/les-etudiants-sur-scene-latelier-de-pratique-theatrale',
    color: '#6d28d9',
  },
  {
    id: 'museum-hackathon',
    code: 'PRJ-09',
    title: 'Hackathon Java — Expérience au Musée',
    category: 'Applications',
    simType: 'graph',
    year: '2024 — 2025',
    description:
      'Conception en équipe d’une application Java lors d’un hackathon pour résoudre une problématique concrète de parcours et de médiation au sein d’un musée.',
    tech: 'Java · Hackathon · Scénographie Muséale',
    specs: ['Sprint Intensif', 'Parcours Visiteur Musée', 'Architecture Java'],
    color: '#b08221',
  },
  {
    id: 'mixed-media',
    code: 'PRJ-10',
    title: 'Mixed Media Utilities',
    category: 'Applications',
    simType: 'pipeline',
    year: '2026',
    description:
      'Création d’une suite d’outils en Python permettant d’analyser, trier, convertir et gérer automatiquement des bibliothèques de fichiers multimédias hétérogènes.',
    tech: 'Python · Automatisation Média · CLI',
    specs: ['Traitement par Lots', 'Inspection de Métadonnées', 'Code Open-Source'],
    link: 'https://github.com/enzotfn/mixedmedia',
    color: '#8b5cf6',
  },
  {
    id: 'primesetup',
    code: 'PRJ-11',
    title: 'PrimeSetup — E-Commerce',
    category: 'Web Design',
    simType: 'ui',
    year: '2022 — 2023',
    description:
      'Conception graphique et développement d’un site de vente en ligne dédié aux équipements et espaces de travail, avec un soin particulier porté à la hiérarchie visuelle.',
    tech: 'UI/UX Design · Web Responsive',
    specs: ['Direction Artistique Web', 'Interface Épurée', 'Parcours E-Commerce'],
    color: '#b08221',
  },
  {
    id: 'happy-hour-nantes',
    code: 'PRJ-12',
    title: 'Happy Hour Nantes',
    category: 'Web Design',
    simType: 'ui',
    year: '2022',
    description:
      'Création du design et développement d’un site web culturel et convivial répertoriant les adresses nantaises.',
    tech: 'HTML/CSS/JS · Design Éditorial',
    specs: ['Guide Local Nantais', 'Mise en Page Responsive', 'Déploiement En Ligne'],
    link: 'https://raphour.github.io/site_communication_professionelle/',
    color: '#6d28d9',
  },
  {
    id: 'voituragogo',
    code: 'PRJ-13',
    title: 'Voituragogo',
    category: 'Développement Web',
    simType: 'ui',
    year: '2022',
    description:
      'Développement et intégration fidèle d’une application web à partir d’une maquette graphique exigeante, dans le respect des standards d’accessibilité et de responsive design.',
    tech: 'Intégration Web · CSS Grid · HTML Sémantique',
    specs: ['Fidélité Maquette', 'Grille Multi-Écrans', 'Standards du Web'],
    color: '#8b5cf6',
  },
];

export const navItems = [
  { id: 'hero', code: '00', label: 'Accueil', title: 'PROLOGUE // ACCUEIL' },
  { id: 'about', code: '01', label: 'Profil', title: 'PORTRAIT // DÉMARCHE' },
  { id: 'resume', code: '02', label: 'Parcours', title: 'CATALOGUE // PARCOURS' },
  { id: 'skills', code: '03', label: 'Savoir-Faire', title: 'ARCHITECTURE // SAVOIR-FAIRE' },
  { id: 'projects', code: '04', label: 'Projets', title: 'COLLECTION // PROJETS' },
  { id: 'contact', code: '05', label: 'Contact', title: 'ÉPILOGUE // CONTACT' },
];
