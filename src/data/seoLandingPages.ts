import { DataCardMaster } from "@/data/dataMaster";

export type SeoHubSection = {
  title: string;
  description: string;
  links: Array<{
    slug: string;
    label: string;
  }>;
};

export type SeoLandingPageData = {
  slug: string;
  navTitle: string;
  eyebrow: string;
  h1: string;
  primaryKeyword: string;
  metaDescription: string;
  intro: string;
  highlights: string[];
  keywords: string[];
  relatedMasterPages: DataCardMaster["page"][];
  ctaMasterPage: DataCardMaster["page"];
  relatedSeoSlugs: string[];
  contentAngles: string[];
  hubSections?: SeoHubSection[];
};

export const seoLandingPages: SeoLandingPageData[] = [
  {
    slug: "cooking-class-rome",
    navTitle: "Cooking Class Rome",
    eyebrow: "SEO HUB",
    h1: "Cooking Class Rome: кулінарні враження в Римі для україномовних гостей",
    primaryKeyword: "Cooking Class Rome",
    metaDescription:
      "Cooking class Rome у Cucina Roma: піца, паста, тірамісу, wine tasting, приватні та сімейні формати з україномовним супроводом і швидким бронюванням.",
    intro:
      "Це головна SEO-сторінка кластера. Вона збирає broad intent українською, додає ключові англомовні сигнали і направляє трафік на релевантні money pages.",
    highlights: [
      "Хаб без doorway-дублювання для broad intent.",
      "UA-first контент + EN пошукові маркери.",
      "Внутрішні лінки на всі ключові SEO гілки.",
      "CTA на master сторінки для конверсії.",
      "Єдина точка консолідації authority.",
    ],
    keywords: [
      "cooking class rome",
      "italian cooking class rome",
      "food experience rome",
      "кулінарний майстер-клас рим",
      "corsi di cucina roma",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "nioki_tiramisu", "wino"],
    ctaMasterPage: "pizza_tiramisu",
    relatedSeoSlugs: ["pizza-class-rome", "pasta-class-rome", "private-cooking-class-rome", "wine-tasting-rome"],
    contentAngles: [
      "Консолідація intent замість doorway pages",
      "UA-first стратегія для пріоритетної аудиторії",
      "English signals для international indexing",
      "Передача authority на /master/* сторінки",
      "Локальна релевантність Rome і Vatican",
      "Анти-cannibalization через one intent one page",
      "Користувацький шлях від broad query до booking",
      "Масштабування SEO без дублювання URL",
    ],
    hubSections: [
      {
        title: "Pizza classes",
        description: "Майстер-класи з піци для гостей, які хочуть практичний і смачний досвід у Римі.",
        links: [
          { slug: "pizza-class-rome", label: "Pizza Class Rome" },
          { slug: "tiramisu-class-rome", label: "Tiramisu Class Rome" },
        ],
      },
      {
        title: "Pasta classes",
        description: "Формати з пастою та близькими італійськими техніками для поціновувачів handmade кухні.",
        links: [
          { slug: "pasta-class-rome", label: "Pasta Class Rome" },
        ],
      },
      {
        title: "Private experiences",
        description: "Приватні сценарії для пар, святкувань і камерних компаній.",
        links: [
          { slug: "private-cooking-class-rome", label: "Private Cooking Class Rome" },
        ],
      },
      {
        title: "Family experiences",
        description: "Сімейні формати для подорожей із дітьми у комфортному темпі.",
        links: [
          { slug: "family-cooking-class-rome", label: "Family Cooking Class Rome" },
        ],
      },
      {
        title: "Ukrainian speaking classes",
        description: "Формати з повноцінним україномовним супроводом від початку до завершення класу.",
        links: [
          {
            slug: "ukrainian-speaking-cooking-class-rome",
            label: "Ukrainian Speaking Class",
          },
        ],
      },
      {
        title: "Location based classes",
        description: "Зручні варіанти для гостей, які планують день біля Vatican або в центрі міста.",
        links: [
          {
            slug: "cooking-class-near-vatican",
            label: "Cooking Class Near Vatican",
          },
          { slug: "wine-tasting-rome", label: "Wine Tasting Rome" },
        ],
      },
    ],
  },
  {
    slug: "pizza-class-rome",
    navTitle: "Pizza Class Rome",
    eyebrow: "SEO page",
    h1: "Pizza Class Rome: майстер-клас піци та тірамісу в Римі",
    primaryKeyword: "Pizza Class Rome",
    metaDescription:
      "Pizza class Rome у Cucina Roma: hands-on робота з тістом, випікання піци, тірамісу та україномовний супровід із швидким підтвердженням бронювання.",
    intro:
      "Сторінка закриває точний pizza intent і пояснює формат українською, з ключовими англомовними маркерами для стабільної індексації.",
    highlights: [
      "Primary focus: pizza class Rome.",
      "Tiramisu як частина повного досвіду.",
      "CTA на /master/pizza_tiramisu.",
      "Back-link на hub сторінку.",
      "Внутрішні посилання на суміжні інтенти.",
    ],
    keywords: [
      "pizza class rome",
      "pizza making class rome",
      "майстер-клас піци рим",
      "pizza and tiramisu class rome",
    ],
    relatedMasterPages: ["pizza_tiramisu"],
    ctaMasterPage: "pizza_tiramisu",
    relatedSeoSlugs: ["cooking-class-rome", "tiramisu-class-rome", "private-cooking-class-rome", "family-cooking-class-rome"],
    contentAngles: [
      "Що користувач очікує від pizza class у Rome",
      "Практичний формат hands-on замість загальних обіцянок",
      "Як поєднання pizza + tiramisu підвищує цінність",
      "Роль сторінки у передачі authority на master page",
      "UA-first пояснення для швидкого вибору",
      "English phrase coverage для Google indexing",
      "Internal links без канібалізації",
      "Масштабування контенту без дублюючих URL",
    ],
  },
  {
    slug: "pasta-class-rome",
    navTitle: "Pasta Class Rome",
    eyebrow: "SEO page",
    h1: "Pasta Class Rome: майстер-клас пасти та тірамісу в Римі",
    primaryKeyword: "Pasta Class Rome",
    metaDescription:
      "Pasta class Rome у Cucina Roma: handmade pasta, італійські техніки, тірамісу та україномовний супровід у затишному форматі в центрі Риму.",
    intro:
      "Сторінка консолідує pasta та gnocchi intent в один сильний URL, щоб прибрати дублювання та посилити topical authority.",
    highlights: [
      "Pasta intent як primary keyword.",
      "Gnocchi intent merged у цій сторінці.",
      "CTA на /master/pasta_tiramisu.",
      "Сильний внутрішній зв'язок із hub.",
      "Без doorway і без cannibalization.",
    ],
    keywords: [
      "pasta class rome",
      "gnocchi class rome",
      "pasta and tiramisu class rome",
      "майстер-клас пасти рим",
    ],
    relatedMasterPages: ["pasta_tiramisu", "nioki_tiramisu"],
    ctaMasterPage: "pasta_tiramisu",
    relatedSeoSlugs: ["cooking-class-rome", "private-cooking-class-rome", "family-cooking-class-rome", "tiramisu-class-rome"],
    contentAngles: [
      "Консолідація pasta і gnocchi в одному релевантному URL",
      "UA-first контент для головної клієнтської аудиторії",
      "English ключі для розширеної видимості",
      "Практичний опис формату для туристичного рішення",
      "Передача authority на conversion page",
      "Internal links для повного кластерного покриття",
      "Анти-cannibalization логіка one intent one page",
      "Оновлення сторінки без створення thin клонів",
    ],
  },
  {
    slug: "tiramisu-class-rome",
    navTitle: "Tiramisu Class Rome",
    eyebrow: "SEO page",
    h1: "Tiramisu Class Rome: солодкий майстер-клас у Римі",
    primaryKeyword: "Tiramisu Class Rome",
    metaDescription:
      "Tiramisu class Rome у Cucina Roma: автентичний десертний досвід із практикою, тепла атмосфера, зручна локація та швидке бронювання для гостей Риму.",
    intro:
      "Сторінка під десертний намір, що переводить користувача до реального bookable формату без дублювання інших SEO URL.",
    highlights: [
      "Primary dessert intent.",
      "Логічний зв'язок із pizza/pasta форматами.",
      "CTA на релевантний master page.",
      "Внутрішній перехід на hub і sibling pages.",
      "Унікальний кут без копіпасту.",
    ],
    keywords: [
      "tiramisu class rome",
      "tiramisu making class rome",
      "десертний майстер-клас рим",
      "tiramisu experience rome",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "nioki_tiramisu"],
    ctaMasterPage: "pizza_tiramisu",
    relatedSeoSlugs: ["cooking-class-rome", "pizza-class-rome", "pasta-class-rome", "private-cooking-class-rome"],
    contentAngles: [
      "Dessert-first намір як окрема точка входу",
      "Відмінність від pizza/pasta URL",
      "UA-first довіра для швидкого рішення",
      "English query signals для search coverage",
      "Передача користувача у conversion funnel",
      "Internal linking і повернення на hub",
      "Контентна глибина замість thin doorway pattern",
      "Стабільне масштабування без дублювання",
    ],
  },
  {
    slug: "wine-tasting-rome",
    navTitle: "Wine Tasting Rome",
    eyebrow: "SEO page",
    h1: "Wine Tasting Rome: дегустація вина та гастрономічні поєднання",
    primaryKeyword: "Wine Tasting Rome",
    metaDescription:
      "Wine tasting Rome у Cucina Roma: італійські вина, гастрономічні pairings, атмосфера вечора в Римі та зручне бронювання для пар і друзів.",
    intro:
      "Окрема сторінка для wine intent, щоб не змішувати дегустаційний сценарій із cooking-class запитами без потреби.",
    highlights: [
      "Primary keyword: wine tasting Rome.",
      "UA-first опис + English indexing підтримка.",
      "CTA на /master/wino.",
      "Контекстні лінки на hub/private/location.",
      "Уникнення дублюючих food-experience URL.",
    ],
    keywords: [
      "wine tasting rome",
      "rome wine tasting experience",
      "дегустація вина рим",
      "wine and food pairing rome",
    ],
    relatedMasterPages: ["wino"],
    ctaMasterPage: "wino",
    relatedSeoSlugs: ["cooking-class-rome", "private-cooking-class-rome", "cooking-class-near-vatican", "family-cooking-class-rome"],
    contentAngles: [
      "Окремий дегустаційний намір без змішування intent",
      "Практичні критерії вибору для туриста",
      "UA-first довіра і зрозумілість",
      "English терміни для міжнародної видачі",
      "Authority transfer на /master/wino",
      "Контекстні внутрішні переходи",
      "Відмова від thin food-experience сторінок",
      "Системне масштабування wine-контенту",
    ],
  },
  {
    slug: "private-cooking-class-rome",
    navTitle: "Private Cooking Class Rome",
    eyebrow: "SEO page",
    h1: "Private Cooking Class Rome: приватний кулінарний досвід у Римі",
    primaryKeyword: "Private Cooking Class Rome",
    metaDescription:
      "Private cooking class Rome у Cucina Roma: індивідуальний формат для пар, святкувань і компаній з україномовним супроводом та швидким бронюванням.",
    intro:
      "Сторінка об'єднує private intent, включаючи couples/team/birthday, щоб прибрати doorway-дублікати і посилити один авторитетний URL.",
    highlights: [
      "Merged intent: couples + birthday + team building.",
      "UA-first текст з EN markers.",
      "Чіткий CTA на conversion page.",
      "Back-link на hub і релевантні sibling сторінки.",
      "Консолідація authority.",
    ],
    keywords: [
      "private cooking class rome",
      "couples cooking class rome",
      "team building cooking class rome",
      "birthday cooking class rome",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "nioki_tiramisu", "wino"],
    ctaMasterPage: "pasta_tiramisu",
    relatedSeoSlugs: ["cooking-class-rome", "pizza-class-rome", "family-cooking-class-rome", "wine-tasting-rome"],
    contentAngles: [
      "Чому private intent треба консолідувати",
      "Сценарії couples, birthday, team без клонування URL",
      "UA-first value proposition для основної аудиторії",
      "English intent terms для Google coverage",
      "Передача authority на master pages",
      "Внутрішня навігація через hub і sibling links",
      "Глибокий контент замість doorway шаблонів",
      "Підтримка і масштабування без cannibalization",
    ],
  },
  {
    slug: "family-cooking-class-rome",
    navTitle: "Family Cooking Class Rome",
    eyebrow: "SEO page",
    h1: "Family Cooking Class Rome: кулінарний формат для родин у Римі",
    primaryKeyword: "Family Cooking Class Rome",
    metaDescription:
      "Family cooking class Rome у Cucina Roma: комфортний темп для батьків і дітей, практичне заняття, central Rome локація та просте бронювання.",
    intro:
      "Сторінка під family intent для батьків, які шукають зручний кулінарний досвід у Римі для себе та дітей.",
    highlights: [
      "Family-first логіка сторінки.",
      "UA-first пояснення для швидкого вибору.",
      "English travel keywords для видимості.",
      "CTA на релевантний master формат.",
      "Контекстні переходи на hub/private/pasta.",
    ],
    keywords: [
      "family cooking class rome",
      "kids cooking class rome",
      "family food experience rome",
      "кулінарний майстер-клас для сім'ї рим",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu"],
    ctaMasterPage: "pizza_tiramisu",
    relatedSeoSlugs: ["cooking-class-rome", "pasta-class-rome", "private-cooking-class-rome", "cooking-class-near-vatican"],
    contentAngles: [
      "Family intent як окремий пошуковий сценарій",
      "Що критично для батьків перед бронюванням",
      "UA-first подача як фактор довіри",
      "English coverage для глобальних family запитів",
      "Передача трафіку на conversion URL",
      "Internal links за наміром, а не випадково",
      "Анти-doorway стратегія для family кластера",
      "Оновлення сторінки без створення клонів",
    ],
  },
  {
    slug: "ukrainian-speaking-cooking-class-rome",
    navTitle: "Ukrainian Speaking Cooking Class Rome",
    eyebrow: "SEO page",
    h1: "Ukrainian Speaking Cooking Class Rome: майстер-клас з супроводом українською",
    primaryKeyword: "Ukrainian Speaking Cooking Class Rome",
    metaDescription:
      "Ukrainian speaking cooking class Rome у Cucina Roma: повний супровід українською, практичний формат у центрі Риму та швидке бронювання онлайн.",
    intro:
      "Ключова сторінка для основної аудиторії бренду: україномовних гостей, яким важливо отримати кулінарний досвід без мовного бар'єру.",
    highlights: [
      "Language-first intent з високим потенціалом конверсії.",
      "Максимально україномовна подача.",
      "EN keywords для міжнародної індексації.",
      "Сильний CTA на master сторінки.",
      "Зв'язок із hub, family, private, location гілками.",
    ],
    keywords: [
      "ukrainian speaking cooking class rome",
      "cooking class rome for ukrainians",
      "rome cooking class ukrainian language",
      "майстер-клас рим українською",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "nioki_tiramisu"],
    ctaMasterPage: "pasta_tiramisu",
    relatedSeoSlugs: ["cooking-class-rome", "family-cooking-class-rome", "private-cooking-class-rome", "cooking-class-near-vatican"],
    contentAngles: [
      "Мовний фактор як драйвер рішення про бронювання",
      "UA-first контент без втрати SEO потенціалу",
      "Роль English signals у міжнародній видачі",
      "Побудова довіри через зрозумілу комунікацію",
      "Передача authority на conversion pages",
      "Internal linking для кластерної цілісності",
      "Уникнення дрібних мовних doorway URL",
      "Довгострокове масштабування language кластера",
    ],
  },
  {
    slug: "cooking-class-near-vatican",
    navTitle: "Cooking Class Near Vatican",
    eyebrow: "SEO page",
    h1: "Cooking Class Near Vatican: зручний кулінарний досвід біля Vatican",
    primaryKeyword: "Cooking Class Near Vatican",
    metaDescription:
      "Cooking class near Vatican у Cucina Roma: зручна локація для туристичного маршруту, практичний формат, україномовна комунікація та швидке бронювання.",
    intro:
      "Сторінка працює з високонамірним гео-запитом near Vatican і швидко веде користувача до релевантного формату класу.",
    highlights: [
      "Geo intent: near Vatican.",
      "UA-first пояснення для швидкого рішення.",
      "English local markers для пошуку.",
      "CTA на master conversion pages.",
      "Контекстний зв'язок із hub і форматними сторінками.",
    ],
    keywords: [
      "cooking class near vatican",
      "vatican cooking class rome",
      "central rome cooking class",
      "майстер-клас біля ватикану рим",
    ],
    relatedMasterPages: ["pizza_tiramisu", "pasta_tiramisu", "nioki_tiramisu"],
    ctaMasterPage: "pizza_tiramisu",
    relatedSeoSlugs: ["cooking-class-rome", "pizza-class-rome", "wine-tasting-rome", "family-cooking-class-rome"],
    contentAngles: [
      "Geo intent як сигнал високої готовності",
      "Різниця між Vatican і broad city-center запитами",
      "UA-first логіка для туристичного UX",
      "English local terms для SERP coverage",
      "Передача authority і трафіку на /master/*",
      "Internal links для повного journey",
      "Локальна релевантність без doorway-pattern",
      "Масштабування local SEO без дублювання",
    ],
  },
];

export const seoLandingPagesBySlug = Object.fromEntries(
  seoLandingPages.map((page) => [page.slug, page]),
) as Record<string, SeoLandingPageData>;

