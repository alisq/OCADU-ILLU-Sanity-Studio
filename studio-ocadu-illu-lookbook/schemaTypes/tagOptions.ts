/**
 * tagOptions.ts
 * Shared option lists for illustration tag fields.
 * Values are kebab-case and should be treated as stable — changing a value
 * orphans existing document data, so prefer editing only the `title`.
 */

export type TagOption = {title: string; value: string}

export const traditionalMedia: TagOption[] = [
  {title: 'Watercolour', value: 'watercolour'},
  {title: 'Gouache', value: 'gouache'},
  {title: 'Acrylic', value: 'acrylic'},
  {title: 'Oil', value: 'oil'},
  {title: 'Ink', value: 'ink'},
  {title: 'Pen & ink', value: 'pen-and-ink'},
  {title: 'Pencil', value: 'pencil'},
  {title: 'Coloured pencil', value: 'coloured-pencil'},
  {title: 'Charcoal', value: 'charcoal'},
  {title: 'Graphite', value: 'graphite'},
  {title: 'Pastel', value: 'pastel'},
  {title: 'Mixed media', value: 'mixed-media'},
  {title: 'Collage', value: 'collage'},
  {title: 'Cut paper', value: 'cut-paper'},
  {title: 'Printmaking', value: 'printmaking'},
  {title: 'Risograph', value: 'risograph'},
  {title: 'Screen printing', value: 'screen-printing'},
  {title: 'Relief printing', value: 'relief-printing'},
  {title: 'Monotype', value: 'monotype'},
  {title: 'Woodcut', value: 'woodcut'},
  {title: 'Linocut', value: 'linocut'},
]

export const digitalMedia: TagOption[] = [
  {title: 'Digital painting', value: 'digital-painting'},
  {title: 'Digital illustration', value: 'digital-illustration'},
  {title: '3D illustration', value: '3d-illustration'},
  {title: 'Motion graphics', value: 'motion-graphics'},
  {title: 'Animated illustration', value: 'animated-illustration'},
  {title: 'Interactive illustration', value: 'interactive-illustration'},
  {title: 'AR/VR illustration', value: 'ar-vr-illustration'},
]

export const publishingEditorial: TagOption[] = [
  {title: 'Editorial illustration', value: 'editorial-illustration'},
  {title: 'Book illustration', value: 'book-illustration'},
  {title: "Children's books", value: 'childrens-books'},
  {title: 'Picture books', value: 'picture-books'},
  {title: 'Young adult', value: 'young-adult'},
  {title: 'Graphic novels', value: 'graphic-novels'},
  {title: 'Comics', value: 'comics'},
  {title: 'Sequential art', value: 'sequential-art'},
  {title: 'Zines', value: 'zines'},
  {title: 'Magazine illustration', value: 'magazine-illustration'},
  {title: 'Newspaper illustration', value: 'newspaper-illustration'},
  {title: 'Cover art', value: 'cover-art'},
  {title: 'Spot illustration', value: 'spot-illustration'},
]

export const commercialApplied: TagOption[] = [
  {title: 'Advertising', value: 'advertising'},
  {title: 'Branding', value: 'branding'},
  {title: 'Packaging', value: 'packaging'},
  {title: 'Product illustration', value: 'product-illustration'},
  {title: 'Infographics', value: 'infographics'},
  {title: 'Technical illustration', value: 'technical-illustration'},
  {title: 'Medical illustration', value: 'medical-illustration'},
  {title: 'Scientific illustration', value: 'scientific-illustration'},
  {title: 'Educational illustration', value: 'educational-illustration'},
  {title: 'Instructional graphics', value: 'instructional-graphics'},
  {title: 'Maps', value: 'maps'},
  {title: 'Wayfinding', value: 'wayfinding'},
  {title: 'Icon design', value: 'icon-design'},
  {title: 'Visual communication', value: 'visual-communication'},
]

export const entertainment: TagOption[] = [
  {title: 'Concept art', value: 'concept-art'},
  {title: 'Character design', value: 'character-design'},
  {title: 'Environment design', value: 'environment-design'},
  {title: 'Storyboarding', value: 'storyboarding'},
  {title: 'Animation design', value: 'animation-design'},
  {title: 'Background painting', value: 'background-painting'},
  {title: 'Game art', value: 'game-art'},
]

export const fineArtGallery: TagOption[] = [
  {title: 'Artist books', value: 'artist-books'},
  {title: 'Installation', value: 'installation'},
  {title: 'Mural', value: 'mural'},
  {title: 'Public art', value: 'public-art'},
  {title: 'Drawing', value: 'drawing'},
  {title: 'Painting', value: 'painting'},
  {title: 'Contemporary art', value: 'contemporary-art'},
  {title: 'Fine art illustration', value: 'fine-art-illustration'},
  {title: 'Narrative painting', value: 'narrative-painting'},
  {title: 'Site-specific work', value: 'site-specific-work'},
]

export const fashionLifestyle: TagOption[] = [
  {title: 'Fashion illustration', value: 'fashion-illustration'},
  {title: 'Beauty illustration', value: 'beauty-illustration'},
  {title: 'Food illustration', value: 'food-illustration'},
  {title: 'Botanical illustration', value: 'botanical-illustration'},
  {title: 'Nature illustration', value: 'nature-illustration'},
  {title: 'Wildlife illustration', value: 'wildlife-illustration'},
  {title: 'Architectural illustration', value: 'architectural-illustration'},
  {title: 'Travel illustration', value: 'travel-illustration'},
]

export const processMaterial: TagOption[] = [
  {title: 'Hand-drawn', value: 'hand-drawn'},
  {title: 'Handmade', value: 'handmade'},
  {title: 'Analog', value: 'analog'},
  {title: 'Digital', value: 'digital'},
  {title: 'Hybrid', value: 'hybrid'},
  {title: 'Experimental', value: 'experimental'},
  {title: 'Process-based', value: 'process-based'},
  {title: 'Material exploration', value: 'material-exploration'},
  {title: 'Sustainable materials', value: 'sustainable-materials'},
  {title: 'Textile', value: 'textile'},
  {title: 'Ceramics', value: 'ceramics'},
  {title: 'Sculpture', value: 'sculpture'},
  {title: 'Embroidery', value: 'embroidery'},
  {title: 'Fibre art', value: 'fibre-art'},
  {title: 'Surface design', value: 'surface-design'},
]

export const narrativeConceptual: TagOption[] = [
  {title: 'Visual storytelling', value: 'visual-storytelling'},
  {title: 'Narrative illustration', value: 'narrative-illustration'},
  {title: 'Conceptual illustration', value: 'conceptual-illustration'},
  {title: 'Metaphorical imagery', value: 'metaphorical-imagery'},
  {title: 'Symbolism', value: 'symbolism'},
  {title: 'Speculative illustration', value: 'speculative-illustration'},
  {title: 'Documentary illustration', value: 'documentary-illustration'},
  {title: 'Autobiographical', value: 'autobiographical'},
  {title: 'Personal narrative', value: 'personal-narrative'},
  {title: 'Social practice', value: 'social-practice'},
  {title: 'Community-engaged', value: 'community-engaged'},
  {title: 'Research-based', value: 'research-based'},
  {title: 'Critical design', value: 'critical-design'},
  {title: 'Activist art', value: 'activist-art'},
]

export const stylistic: TagOption[] = [
  {title: 'Minimalist', value: 'minimalist'},
  {title: 'Maximalist', value: 'maximalist'},
  {title: 'Expressive', value: 'expressive'},
  {title: 'Graphic', value: 'graphic'},
  {title: 'Painterly', value: 'painterly'},
  {title: 'Flat colour', value: 'flat-colour'},
  {title: 'Linework', value: 'linework'},
  {title: 'Textural', value: 'textural'},
  {title: 'Surreal', value: 'surreal'},
  {title: 'Realist', value: 'realist'},
  {title: 'Stylized', value: 'stylized'},
  {title: 'Abstract', value: 'abstract'},
  {title: 'Geometric', value: 'geometric'},
  {title: 'Folk-inspired', value: 'folk-inspired'},
  {title: 'Contemporary', value: 'contemporary'},
  {title: 'Vintage', value: 'vintage'},
  {title: 'Pop', value: 'pop'},
  {title: 'Noir', value: 'noir'},
]

export const subjectMatter: TagOption[] = [
  {title: 'Portraiture', value: 'portraiture'},
  {title: 'Figure', value: 'figure'},
  {title: 'Landscape', value: 'landscape'},
  {title: 'Still life', value: 'still-life'},
  {title: 'Urban', value: 'urban'},
  {title: 'Architecture', value: 'architecture'},
  {title: 'Nature', value: 'nature'},
  {title: 'Flora', value: 'flora'},
  {title: 'Fauna', value: 'fauna'},
  {title: 'Identity', value: 'identity'},
  {title: 'Culture', value: 'culture'},
  {title: 'History', value: 'history'},
  {title: 'Mythology', value: 'mythology'},
  {title: 'Climate', value: 'climate'},
  {title: 'Technology', value: 'technology'},
  {title: 'Politics', value: 'politics'},
  {title: 'Memory', value: 'memory'},
  {title: 'Community', value: 'community'},
]

export const professionalPractice: TagOption[] = [
  {title: 'Self-authorship', value: 'self-authorship'},
  {title: 'Entrepreneurship', value: 'entrepreneurship'},
  {title: 'Independent publishing', value: 'independent-publishing'},
  {title: 'Art direction', value: 'art-direction'},
  {title: 'Collaboration', value: 'collaboration'},
  {title: 'Public engagement', value: 'public-engagement'},
  {title: 'Cross-disciplinary practice', value: 'cross-disciplinary-practice'},
  {title: 'Interdisciplinary practice', value: 'interdisciplinary-practice'},
  {title: 'Research-creation', value: 'research-creation'},
  {title: 'Community-engaged practice', value: 'community-engaged-practice'},
  {title: 'Socially engaged art', value: 'socially-engaged-art'},
  {title: 'Expanded illustration', value: 'expanded-illustration'},
  {title: 'Experimental media', value: 'experimental-media'},
  {title: 'Digital media', value: 'digital-media'},
  {title: 'Interactive media', value: 'interactive-media'},
  {title: 'Visual culture', value: 'visual-culture'},
  {title: 'Design thinking', value: 'design-thinking'},
]

/** Every option in one flat list, de-duplicated by value. */
export const allTagOptions: TagOption[] = Array.from(
  new Map(
    [
      ...traditionalMedia,
      ...digitalMedia,
      ...publishingEditorial,
      ...commercialApplied,
      ...entertainment,
      ...fineArtGallery,
      ...fashionLifestyle,
      ...processMaterial,
      ...narrativeConceptual,
      ...stylistic,
      ...subjectMatter,
      ...professionalPractice,
    ].map((opt) => [opt.value, opt]),
  ).values(),
)
