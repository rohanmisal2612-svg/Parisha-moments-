export interface Product {
  id: string;
  name: string;
  category: 'diwali' | 'wedding' | 'custom' | 'birthday' | 'corporate' | 'festive' | 'luxury-boxes';
  categoryLabel: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  packagingDetails: string;
  idealFor: string[];
  features: string[];
  isFeatured?: boolean;
  isDiwaliSpecial?: boolean;
  isWeddingSpecial?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'pm-01',
    name: 'Royal Silver Peacock Diya & Shubh-Labh Festive Hamper',
    category: 'diwali',
    categoryLabel: 'Diwali Gifts',
    image: '/assets/images/diwali_festive_hamper_1790306150388.jpg',
    shortDescription: 'Deep wine presentation chest with embossed silver Shubh-Labh plaques, ornate peacock diya, and Ferrero Rocher confections.',
    fullDescription: 'Our signature Diwali masterpiece crafted in a royal burgundy magnetic keepsake box. Features traditionally cast antique-silver Shubh & Labh wall pendants, an intricately carved silver peacock diya stand, a velvet keepsake box with peacock feather brooch, and golden-wrapped Ferrero Rocher chocolates resting on golden shredding.',
    packagingDetails: 'Deep burgundy rigid keepsake box with gold foil Parisha Moments seal, satin bow ribbon, and personalized festive greeting card.',
    idealFor: ['Diwali Family Gifting', 'Corporate VIP Clients', 'Griha Pravesh', 'Festive Return Gifts'],
    features: ['Handcrafted Silver Peacock Diya', 'Antique Silver Shubh-Labh Plaques', 'Ferrero Rocher Chocolates', 'Custom Calligraphy Card'],
    isFeatured: true,
    isDiwaliSpecial: true,
  },
  {
    id: 'pm-02',
    name: 'Royal Silver Horse Carriage Dry Fruit Chariot',
    category: 'luxury-boxes',
    categoryLabel: 'Luxury Gift Boxes',
    image: '/assets/images/silver_horse_chariot_1790306217614.jpg',
    shortDescription: 'Regal silver-plated horse chariot with intricate filigree dry-fruit carriage, housed in an imperial burgundy velvet chest.',
    fullDescription: 'A showstopper royal heirloom piece. An intricately sculptured silver horse pulling an ornate wheeled filigree chariot with an embossed crystal-topped dome for dry fruits and mukhwas. Presented in an opulent deep velvet box with golden brass latch and engraved brass Parisha Moments plaque.',
    packagingDetails: 'Imperial burgundy velvet rigid trunk with gold brass latch, golden satin cushioning, and Parisha Moments engraved plaque.',
    idealFor: ['Royal Wedding Return Gifts', 'Diwali Grand Hampers', 'Luxury Dining Decor', 'Housewarming Gifts'],
    features: ['Artisanal Silver Filigree Carving', 'Rolling Wheels & Horse Figurine', 'Crystal Dome Knob', 'Velvet Keepsake Trunk'],
    isFeatured: true,
    isDiwaliSpecial: true,
    isWeddingSpecial: true,
  },
  {
    id: 'pm-03',
    name: 'Regal Silver Cup & Saucer Twin Set in Velvet Keepsake Trunk',
    category: 'wedding',
    categoryLabel: 'Wedding Return Gifts',
    image: '/assets/images/wedding_return_favors_1790306168204.jpg',
    shortDescription: 'Pair of handcrafted silver-embossed cups and filigree saucers with matching spoon in a crimson velvet presentation case.',
    fullDescription: 'An enduring symbol of Indian hospitality and warmth. Two mirror-polished silver-plated cups with deeply etched floral arabesques, paired with two scalloped saucers and a masterfully engraved silver serving spoon, resting comfortably on scarlet silk cushions.',
    packagingDetails: 'Crimson red velvet trunk with dual brass lock clasps and padded silk interior.',
    idealFor: ['Wedding Shagun & Return Gifts', 'Anniversary Gifts', 'Corporate Executives', 'Diwali Favors'],
    features: ['Twin Silver Cups & Saucers', 'Engraved Silver Serving Spoon', 'Scarlet Velvet Trunk', 'Certificate of Craftsmanship'],
    isFeatured: true,
    isWeddingSpecial: true,
  },
  {
    id: 'pm-04',
    name: 'Royal Silver Elephant Dry Fruit Container in Gold Velvet Trunk',
    category: 'festive',
    categoryLabel: 'Festive Hampers',
    image: '/assets/images/silver_elephant_jar_1790306229411.jpg',
    shortDescription: 'Ornate silver and enameled royal elephant dry fruit urn with miniature spoon inside a golden velvet trunk.',
    fullDescription: 'Inspired by royal Indian pageantry, this magnificent elephant container features intricate floral enamel work and silver repoussé carving. The hollow back opens to hold premium dry fruits or sweets, accompanied by an enameled floral spoon.',
    packagingDetails: 'Golden honey velvet trunk with satin lining and custom Parisha Moments branding.',
    idealFor: ['Traditional Indian Weddings', 'Festive Shagun', 'Mehendi & Haldi Return Gifts', 'Diwali Celebrations'],
    features: ['Enameled Silver Elephant Motif', 'Matching Floral Spoon', 'Gold Satin Velvet Case', 'Auspicious Gifting'],
    isFeatured: true,
    isDiwaliSpecial: true,
    isWeddingSpecial: true,
  },
  {
    id: 'pm-05',
    name: 'Luxury Birthday & Celebration Keepsake Hamper',
    category: 'birthday',
    categoryLabel: 'Birthday Gifts',
    image: '/assets/images/bespoke_celebration_box_1790306183634.jpg',
    shortDescription: 'Ivory keepsake box with designer ivory handbag, traditional bangles, artisan fragrance, and personalized card.',
    fullDescription: 'A truly memorable curated gift box styled with soft pink shredded filler, warm fairy lights, and blush satin ribbon. Includes a stylish vegan leather curved shoulder bag, traditional golden glass bangles, fine fragrance, and handwritten greeting card.',
    packagingDetails: 'Warm ivory rigid lid box with blush ribbon bow and personalized "Happy Birthday" seal.',
    idealFor: ['Birthday Celebrations', 'Sister Gifts', 'Best Friend Gifts', 'Bridesmaid Proposals'],
    features: ['Designer Shoulder Handbag', 'Artisanal Bangles Roll', 'Designer Fragrance', 'Fairy Light Embellishment'],
    isFeatured: true,
  },
  {
    id: 'pm-06',
    name: 'Executive Corporate Luxe Hamper',
    category: 'corporate',
    categoryLabel: 'Corporate Gifts',
    image: '/assets/images/corporate_executive_box_1790306195818.jpg',
    shortDescription: 'Matte black and champagne gold executive set with thermal flask, engraved metal pen, and gratitude card.',
    fullDescription: 'Designed for discerning clients, corporate leadership, and festive employee appreciation. Housed in an elegant matte black box with foil-stamped Parisha Moments logo, featuring a temperature-retaining matte black insulated flask, gold executive pen, and customized message.',
    packagingDetails: 'Custom foil-embossed matte black magnetic box with high-density foam silhouette slots.',
    idealFor: ['Corporate Diwali Gifting', 'Client Appreciation', 'Annual Day Awards', 'Executive Welcomes'],
    features: ['Temperature Retaining Flask', 'Gold Metal Executive Pen', 'Custom Corporate Branding', 'Bulk Order Customisation'],
    isFeatured: true,
  },
  {
    id: 'pm-07',
    name: 'Royal Heritage Swastik Pooja Thali & Diya Bell Set',
    category: 'diwali',
    categoryLabel: 'Diwali Gifts',
    image: '/assets/images/diwali_festive_hamper_1790306150388.jpg',
    shortDescription: 'Auspicious embossed brass Swastik diya holder with silver-finish bell in a royal crimson velvet case.',
    fullDescription: 'Bring sacred divine blessings into any home. Features a deeply engraved brass Swastik oil lamp base with polished silver wick reservoir and a ceremonial chime bell, cradled on scarlet silk inside a brass-latched velvet chest.',
    packagingDetails: 'Crimson velvet presentation case with "Small Gifts Create Big Memories" greeting note.',
    idealFor: ['Diwali Pooja Gifts', 'Housewarming / Griha Pravesh', 'Wedding Shagun', 'Temple Favors'],
    features: ['Solid Brass Auspicious Swastik', 'Ceremonial Brass Pooja Bell', 'Crimson Velvet Box', 'Sacred Traditional Keepsake'],
    isDiwaliSpecial: true,
    isWeddingSpecial: true,
  },
  {
    id: 'pm-08',
    name: 'Bespoke Custom Gifting Hamper',
    category: 'custom',
    categoryLabel: 'Customised Gifts',
    image: '/assets/images/hero_luxury_gifting_hamper_1790306127833.jpg',
    shortDescription: 'Completely tailored gift hamper with your choice of box color, items, personalized names, and ribbon accents.',
    fullDescription: 'Our signature bespoke service. You select the box aesthetic (Burgundy Velvet, Warm Ivory, Midnight Navy, or Matte Black), choose curated items (dry fruits, silver artifacts, sweets, accessories, apparel), and personalize names and cards.',
    packagingDetails: 'Handcrafted custom box with personalized engraved gold plaque or wax seal.',
    idealFor: ['Weddings & Anniversaries', 'Festive Celebrations', 'Special Milestones', 'Personal Gifting'],
    features: ['100% Tailored Contents', 'Personalized Lid Engraving', 'Choice of Ribbon & Box Color', 'Handwritten Message Note'],
    isFeatured: true,
  },
];

export const CATEGORIES = [
  {
    id: 'all',
    title: 'ALL COLLECTIONS',
    description: 'Explore the complete Parisha Moments collection of curated luxury gifts.',
    icon: 'Sparkles',
  },
  {
    id: 'custom',
    title: 'CUSTOMISED GIFTS',
    description: 'Personalised gifts designed especially for your loved ones with bespoke packaging.',
    icon: 'Gift',
  },
  {
    id: 'diwali',
    title: 'DIWALI GIFTS',
    description: 'Elegant festive hampers, traditional décor gifts, dry-fruit boxes, sweets and Diwali collections.',
    icon: 'Flame',
  },
  {
    id: 'wedding',
    title: 'WEDDING RETURN GIFTS',
    description: 'Memorable return gifts for weddings, engagements, haldi, mehendi and celebrations.',
    icon: 'Heart',
  },
  {
    id: 'birthday',
    title: 'BIRTHDAY GIFTS',
    description: 'Thoughtfully curated birthday gift boxes for friends, family and loved ones.',
    icon: 'Cake',
  },
  {
    id: 'corporate',
    title: 'CORPORATE GIFTS',
    description: 'Premium gifting options for employees, clients, business partners and corporate celebrations.',
    icon: 'Briefcase',
  },
  {
    id: 'festive',
    title: 'FESTIVE HAMPERS',
    description: 'Beautifully assembled hampers for festivals and special occasions across India.',
    icon: 'Calendar',
  },
  {
    id: 'luxury-boxes',
    title: 'LUXURY GIFT BOXES',
    description: 'Premium velvet and rigid presentation boxes containing carefully selected treasures.',
    icon: 'Box',
  },
];

export const BRAND_CONTACT = {
  phoneDisplay: '+91 91318 71919',
  phoneRaw: '9131871919',
  phoneInternational: '+919131871919',
  whatsappUrl: (message: string = '') =>
    `https://wa.me/919131871919?text=${encodeURIComponent(
      message || 'Hello Parisha Moments, I would like to enquire about your luxury customized gifts.'
    )}`,
  instagramHandle: '@parisha_moments',
  instagramAlt: '@parishamoments',
  instagramUrl: 'https://www.instagram.com/parisha_moments',
  tagline: 'Where Every Gift Holds a Special Emotion',
};
