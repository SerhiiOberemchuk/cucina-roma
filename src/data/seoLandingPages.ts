import { DataCardMaster } from "@/data/dataMaster";

export type SeoLandingPageData = {
  slug: string;
  navTitle: string;
  eyebrow: string;
  h1: string;
  intro: string;
  highlights: string[];
  keywords: string[];
  relatedMasterPages: DataCardMaster["page"][];
};

export const seoLandingPages: SeoLandingPageData[] = [
  {
    slug: "cooking-class-rome",
    navTitle: "Cooking Class Rome",
    eyebrow: "seo сторінка",
    h1: "Cooking Class Rome з україномовним супроводом",
    intro:
      "Cucina Roma організовує кулінарні майстер-класи в Римі для туристів, які хочуть автентичний італійський досвід без мовного бар'єру.",
    highlights: [
      "Локація в історичному центрі Рима.",
      "Майстер-класи з піци, пасти, ньокі та тірамісу.",
      "Україномовний супровід протягом події.",
      "Комфортне бронювання через сайт або WhatsApp.",
    ],
    keywords: [
      "cooking class rome",
      "cooking classes in rome italy",
      "кулінарний майстер-клас рим",
      "майстер-клас італійська кухня рим",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "nioki_tiramisu"],
  },
  {
    slug: "pasta-class-rome",
    navTitle: "Pasta Class Rome",
    eyebrow: "seo сторінка",
    h1: "Pasta Class Rome: майстер-клас пасти та тірамісу",
    intro:
      "Сторінка для пошукового наміру «pasta class Rome». Формат події підходить парам, друзям і невеликим туристичним групам.",
    highlights: [
      "Практичний формат приготування пасти з шефом.",
      "Десерт тірамісу в межах одного заняття.",
      "Тривалість близько 2 годин.",
      "Підійде для першого кулінарного досвіду в Італії.",
    ],
    keywords: [
      "pasta class rome",
      "pasta and tiramisu class rome",
      "майстер-клас пасти рим",
      "тірамісу майстер-клас рим",
    ],
    relatedMasterPages: ["pasta_tiramisu"],
  },
  {
    slug: "wine-tasting-rome",
    navTitle: "Wine Tasting Rome",
    eyebrow: "seo сторінка",
    h1: "Wine Tasting Rome: дегустація вина в Римі",
    intro:
      "Сторінка для пошукового наміру «wine tasting Rome». Формат включає дегустацію добірних вин та італійські закуски у центрі міста.",
    highlights: [
      "Регіональні вина Італії та гастро-поєднання.",
      "Формат для пари, друзів або подарункового сертифікату.",
      "Зручна локація в центрі Рима.",
      "Швидке бронювання без складних кроків.",
    ],
    keywords: [
      "wine tasting rome",
      "wine tasting in rome italy",
      "дегустація вина рим",
      "винний тур рим",
    ],
    relatedMasterPages: ["wino"],
  },
  {
    slug: "pizza-class-rome",
    navTitle: "Pizza Class Rome",
    eyebrow: "seo сторінка",
    h1: "Pizza Class Rome: майстер-клас піци та тірамісу",
    intro:
      "Сторінка під пошуковий намір «pizza class Rome» для туристів, які хочуть відчути неаполітанські техніки приготування піци в Римі.",
    highlights: [
      "Практичне приготування тіста та випікання піци.",
      "Додатково десерт тірамісу в межах одного формату.",
      "Зручний формат для першого знайомства з італійською кухнею.",
      "Бронювання онлайн або через WhatsApp.",
    ],
    keywords: [
      "pizza class rome",
      "pizza making class rome",
      "майстер-клас піца рим",
      "піца та тірамісу рим",
    ],
    relatedMasterPages: ["pizza_tiramisu"],
  },
  {
    slug: "tiramisu-class-rome",
    navTitle: "Tiramisu Class Rome",
    eyebrow: "seo сторінка",
    h1: "Tiramisu Class Rome: кулінарний досвід у Римі",
    intro:
      "Сторінка для запитів «tiramisu class Rome» з акцентом на практичне приготування італійського десерту в автентичному форматі.",
    highlights: [
      "Тірамісу як частина комплексного майстер-класу.",
      "Формати з піцою, пастою або ньокі на вибір.",
      "Підходить для пар, друзів і міні-груп.",
      "Україномовний супровід протягом заняття.",
    ],
    keywords: [
      "tiramisu class rome",
      "tiramisu making class rome",
      "тірамісу майстер-клас рим",
      "десертний майстер-клас рим",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "nioki_tiramisu"],
  },
  {
    slug: "gnocchi-class-rome",
    navTitle: "Gnocchi Class Rome",
    eyebrow: "seo сторінка",
    h1: "Gnocchi Class Rome: майстер-клас ньокі в Римі",
    intro:
      "Тематична сторінка для запитів «gnocchi class Rome» з фокусом на приготування ньокі та тірамісу у форматі кулінарної події.",
    highlights: [
      "Практика формування ньокі та робота з соусами.",
      "Поєднання з десертом тірамісу в одному занятті.",
      "Затишна локація в центральній частині Рима.",
      "Зручний формат для туристів без мовного бар'єру.",
    ],
    keywords: [
      "gnocchi class rome",
      "gnocchi making class rome",
      "майстер-клас ньокі рим",
      "італійські ньокі рим",
    ],
    relatedMasterPages: ["nioki_tiramisu"],
  },
  {
    slug: "italian-cooking-class-rome",
    navTitle: "Italian Cooking Class Rome",
    eyebrow: "seo сторінка",
    h1: "Italian Cooking Class Rome для туристів у центрі міста",
    intro:
      "Сторінка для широкого кластера «italian cooking class Rome» з презентацією форматів Cucina Roma у центрі Рима.",
    highlights: [
      "Кілька форматів: піца, паста, ньокі, винна дегустація.",
      "Підходить для подорожей, романтичних поїздок і подарунків.",
      "Підтримка українською мовою протягом події.",
      "Чітка структура бронювання без зайвих кроків.",
    ],
    keywords: [
      "italian cooking class rome",
      "italian cooking classes in rome",
      "італійський кулінарний майстер-клас рим",
      "готувати в римі майстер-клас",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "nioki_tiramisu", "wino"],
  },
  {
    slug: "food-experience-rome",
    navTitle: "Food Experience Rome",
    eyebrow: "seo сторінка",
    h1: "Food Experience Rome: гастрономічний досвід у Римі",
    intro:
      "Сторінка для кластеру запитів «food experience Rome» з акцентом на гастрономічні враження, дегустації та кулінарні майстер-класи.",
    highlights: [
      "Комбінація приготування страв і дегустацій.",
      "Підходить для туристів, які цінують локальний смак Італії.",
      "Формати для пар, друзів і невеликих груп.",
      "Бронювання заздалегідь на зручну дату.",
    ],
    keywords: [
      "food experience rome",
      "rome food experience",
      "гастрономічний досвід рим",
      "гастро активність рим",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "wino"],
  },
  {
    slug: "cooking-class-rome-city-center",
    navTitle: "Cooking Class Rome City Center",
    eyebrow: "seo сторінка",
    h1: "Cooking Class Rome City Center: майстер-класи в центрі Рима",
    intro:
      "Сторінка для запитів із гео-намірами: кулінарні майстер-класи в історичному центрі Рима з легкою логістикою для туристів.",
    highlights: [
      "Локація у центральному районі Рима.",
      "Мінімум часу на дорогу під час подорожі.",
      "Доступні формати для різних уподобань.",
      "Зручна навігація та швидке підтвердження бронювання.",
    ],
    keywords: [
      "cooking class rome city center",
      "cooking class in central rome",
      "майстер-клас рим центр",
      "кулінарний майстер-клас у центрі рима",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "nioki_tiramisu"],
  },
  {
    slug: "private-cooking-class-rome",
    navTitle: "Private Cooking Class Rome",
    eyebrow: "seo page",
    h1: "Private Cooking Class Rome for couples, families and friends",
    intro:
      "Landing page for users searching a private culinary experience in Rome with flexible timing, small groups and direct booking.",
    highlights: [
      "Private format with personal attention from the chef.",
      "Good fit for couples, friends and family travelers.",
      "Choose pizza, pasta or gnocchi format with tiramisu.",
      "Simple confirmation via website or WhatsApp.",
    ],
    keywords: [
      "private cooking class rome",
      "private pasta class rome",
      "private pizza class rome",
      "private italian cooking class rome",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "nioki_tiramisu"],
  },
  {
    slug: "family-cooking-class-rome",
    navTitle: "Family Cooking Class Rome",
    eyebrow: "seo page",
    h1: "Family Cooking Class Rome for travelers with kids",
    intro:
      "Landing page for family-oriented search intent. It positions Cucina Roma as an easy and engaging food activity in Rome for parents and children.",
    highlights: [
      "Interactive hands-on format with clear step-by-step guidance.",
      "Comfortable pace for families on holiday.",
      "Popular options: pizza + tiramisu or pasta + tiramisu.",
      "Central location and straightforward booking process.",
    ],
    keywords: [
      "family cooking class rome",
      "cooking class in rome for families",
      "kids cooking class rome",
      "family food experience rome",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu"],
  },
  {
    slug: "couples-cooking-class-rome",
    navTitle: "Couples Cooking Class Rome",
    eyebrow: "seo page",
    h1: "Couples Cooking Class Rome for romantic trips",
    intro:
      "Landing page for couple-focused queries where travelers seek a memorable date-style food experience in Rome.",
    highlights: [
      "Date-friendly format for two guests.",
      "Cooking + tasting in one session.",
      "Options with pizza, pasta or wine tasting in Rome.",
      "Great fit for anniversaries and proposal trips.",
    ],
    keywords: [
      "couples cooking class rome",
      "romantic cooking class rome",
      "date night cooking class rome",
      "food experience for couples rome",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "wino"],
  },
  {
    slug: "team-building-cooking-class-rome",
    navTitle: "Team Building Cooking Class Rome",
    eyebrow: "seo page",
    h1: "Team Building Cooking Class Rome for small corporate groups",
    intro:
      "Landing page for business and group requests where companies need a practical team-building activity during Rome visits.",
    highlights: [
      "Group-friendly format for corporate and agency bookings.",
      "Clear scenario: cook together, then taste together.",
      "Can be adapted for mixed teams and international guests.",
      "Direct inquiry flow to confirm date and group size.",
    ],
    keywords: [
      "team building cooking class rome",
      "corporate cooking class rome",
      "group cooking experience rome",
      "company event rome cooking class",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "nioki_tiramisu"],
  },
  {
    slug: "birthday-cooking-class-rome",
    navTitle: "Birthday Cooking Class Rome",
    eyebrow: "seo page",
    h1: "Birthday Cooking Class Rome for private celebrations",
    intro:
      "Landing page for celebration intent where users look for a birthday activity in Rome with food, social interaction and easy planning.",
    highlights: [
      "Private celebration format for birthdays and special dates.",
      "Experience includes cooking, tasting and shared photos.",
      "Suitable for friend groups and family celebrations.",
      "Fast booking confirmation and clear pricing on service pages.",
    ],
    keywords: [
      "birthday cooking class rome",
      "birthday activity rome food",
      "private birthday experience rome",
      "celebration cooking class rome",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "wino"],
  },
  {
    slug: "ukrainian-speaking-cooking-class-rome",
    navTitle: "Ukrainian Speaking Cooking Class Rome",
    eyebrow: "seo page",
    h1: "Ukrainian speaking cooking class in Rome",
    intro:
      "Landing page focused on Ukrainian-speaking travelers in Italy who want a local culinary experience without language barriers.",
    highlights: [
      "Ukrainian-language support during the full experience.",
      "Clear explanations for first-time participants.",
      "Central Rome location and tourist-friendly format.",
      "Convenient communication through WhatsApp.",
    ],
    keywords: [
      "ukrainian speaking cooking class rome",
      "cooking class rome for ukrainians",
      "україномовний майстер клас рим",
      "майстер клас рим українською",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "nioki_tiramisu"],
  },
  {
    slug: "cooking-class-near-vatican",
    navTitle: "Cooking Class Near Vatican",
    eyebrow: "seo page",
    h1: "Cooking Class Near Vatican in Rome",
    intro:
      "Landing page for high-intent geo queries where users search nearby activities after visiting Vatican and central attractions.",
    highlights: [
      "Strong geo relevance for central Rome visitors.",
      "Convenient format for same-day or next-day plans.",
      "Popular classes: pizza, pasta, gnocchi and tiramisu.",
      "Simple booking funnel with short decision path.",
    ],
    keywords: [
      "cooking class near vatican",
      "vatican cooking class rome",
      "central rome cooking class",
      "food activity near vatican",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "nioki_tiramisu"],
  },
  {
    slug: "corsi-di-cucina-roma",
    navTitle: "Corsi Di Cucina Roma",
    eyebrow: "seo page",
    h1: "Corsi di cucina a Roma per turisti internazionali",
    intro:
      "Landing page for Italian-language search intent to capture additional demand from multilingual users planning food experiences in Rome.",
    highlights: [
      "Italian keyword targeting for local and multilingual traffic.",
      "Practical class options in central Rome.",
      "Formats include pizza, pasta, gnocchi and wine tasting.",
      "Direct conversion path to booking and FAQ pages.",
    ],
    keywords: [
      "corsi di cucina roma",
      "corso di cucina roma centro",
      "esperienza culinaria roma",
      "lezione di cucina a roma",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "nioki_tiramisu", "wino"],
  },
];
