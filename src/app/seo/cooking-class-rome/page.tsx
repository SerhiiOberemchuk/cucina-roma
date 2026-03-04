import type { Metadata } from "next";
import SeoLandingPage, {
  SeoLandingPageContent,
} from "@/components/Seo/SeoLandingPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  pathname: "/seo/cooking-class-rome",
  primaryKeyword: "Cooking Class Rome",
  description:
    "Cooking class Rome у Cucina Roma: піца, паста, тірамісу, wine tasting, приватні та сімейні формати з україномовним супроводом і швидким бронюванням.",
  type: "article",
});

const content: SeoLandingPageContent = {
  eyebrow: "Кулінарні майстер-класи в Римі",
  h1: "Cooking Class Rome: кулінарні враження в Римі для україномовних гостей",
  intro:
    "Шукаєте cooking class Rome українською? На цій сторінці зібрані найпопулярніші формати Cucina Roma: піца, паста, тірамісу, дегустація вина, приватні та сімейні сценарії. Ви можете швидко обрати напрям і перейти до бронювання без зайвих кроків.",
  highlights: [
    "Кілька форматів на вибір: pizza, pasta, tiramisu, wine tasting.",
    "Зручна центральна локація в Римі для туристів.",
    "Зрозумілий процес бронювання онлайн або через WhatsApp.",
    "Підтримка українською протягом всього досвіду.",
    "Ідеально для пар, друзів, родин і міні-груп.",
  ],
  ctaHref: "/master/pizza_tiramisu",
  relatedSeoLinks: [
    { href: "/seo/pizza-class-rome", label: "Pizza Class Rome" },
    { href: "/seo/pasta-class-rome", label: "Pasta Class Rome" },
    {
      href: "/seo/private-cooking-class-rome",
      label: "Private Cooking Class Rome",
    },
    { href: "/seo/wine-tasting-rome", label: "Wine Tasting Rome" },
  ],
  hubSections: [
    {
      title: "Pizza classes",
      description:
        "Майстер-класи з піци для гостей, які хочуть практичний і смачний досвід у Римі.",
      links: [
        { href: "/seo/pizza-class-rome", label: "Pizza Class Rome" },
        { href: "/seo/tiramisu-class-rome", label: "Tiramisu Class Rome" },
      ],
    },
    {
      title: "Pasta classes",
      description:
        "Формати з пастою та близькими італійськими техніками для поціновувачів handmade кухні.",
      links: [{ href: "/seo/pasta-class-rome", label: "Pasta Class Rome" }],
    },
    {
      title: "Private experiences",
      description: "Приватні сценарії для пар, святкувань і камерних компаній.",
      links: [
        {
          href: "/seo/private-cooking-class-rome",
          label: "Private Cooking Class Rome",
        },
      ],
    },
    {
      title: "Family experiences",
      description: "Сімейні формати для подорожей із дітьми у комфортному темпі.",
      links: [
        {
          href: "/seo/family-cooking-class-rome",
          label: "Family Cooking Class Rome",
        },
      ],
    },
    {
      title: "Ukrainian speaking classes",
      description:
        "Формати з повноцінним україномовним супроводом від початку до завершення класу.",
      links: [
        {
          href: "/seo/ukrainian-speaking-cooking-class-rome",
          label: "Ukrainian Speaking Class",
        },
      ],
    },
    {
      title: "Location based classes",
      description:
        "Зручні варіанти для гостей, які планують день біля Vatican або в центрі міста.",
      links: [
        {
          href: "/seo/cooking-class-near-vatican",
          label: "Cooking Class Near Vatican",
        },
        { href: "/seo/wine-tasting-rome", label: "Wine Tasting Rome" },
      ],
    },
  ],
  longreadSections: [
    {
      "heading": "Чому гості обирають цей формат у Римі",
      "paragraph": "Коли люди планують подорож до Риму, їм хочеться не лише побачити пам'ятки, а й прожити місто через емоції та смак. Саме тому cooking class Rome став одним із найпопулярніших форматів дозвілля для туристів. У Cucina Roma цей досвід побудований так, щоб вам було легко включитися в процес незалежно від кулінарного рівня. Ви не просто спостерігаєте, а берете участь: працюєте з інгредієнтами, відчуваєте ритм італійської кухні та одразу бачите результат. Для україномовних гостей це ще комфортніше завдяки зрозумілому супроводу, коли не потрібно напружуватися через мовний бар'єр і можна повністю насолодитися подією."
    },
    {
      "heading": "Які формати доступні на одній платформі",
      "paragraph": "На цій сторінці зібрані всі ключові формати, щоб ви могли швидко обрати варіант під свій настрій і склад компанії. Якщо хочете класичну італійську історію, підійдуть pizza class або pasta class. Якщо хочеться більше легкості та атмосфери вечора, можна обрати wine tasting Rome. Для тих, хто подорожує сім'єю чи планує особливу подію, є family та private сценарії. Така структура економить час у поїздці: не потрібно відкривати десятки різних сайтів і порівнювати незрозумілі умови. Усе головне зібрано в одному місці, а перехід до бронювання відбувається прямо на релевантній сторінці формату."
    },
    {
      "heading": "Що входить у досвід і що ви отримуєте",
      "paragraph": "Головна цінність цієї сторінки в тому, що вона веде до реальних, перевірених форматів із зрозумілим наповненням. У межах обраного класу ви отримуєте практичну частину, дегустацію, живу взаємодію та атмосферу, яку важко повторити в ресторані. Це не «теоретична лекція» про кухню, а заняття з відчутним результатом. Ви повертаєтеся з подорожі не лише з фотографіями, а й з конкретними кулінарними враженнями, які можна згадувати роками. Для багатьох гостей саме такий досвід стає емоційною кульмінацією поїздки, бо поєднує відпочинок, спілкування і смачний фінал в одному форматі."
    },
    {
      "heading": "Кому підходить цей сервіс",
      "paragraph": "Ця сторінка створена для різних сценаріїв подорожі. Пари обирають кулінарний клас як романтичну активність на вечір або особливу дату. Друзі беруть формат для спільного дозвілля, де можна сміятися, готувати і проводити час неформально. Родини з дітьми цінують більш м'який темп і безпечну атмосферу. Туристи, які шукають Ukrainian speaking cooking class Rome, отримують впевненість у комунікації на кожному етапі. А ті, хто живе насиченим маршрутом, часто обирають cooking class near Vatican, щоб зручно вбудувати заняття у свій день. Тобто незалежно від стилю поїздки ви знайдете формат, що справді відповідає вашим очікуванням."
    },
    {
      "heading": "Як відбувається бронювання без зайвих кроків",
      "paragraph": "Після вибору напрямку ви переходите на сторінку конкретного формату, де залишаєте заявку на зручну дату. Процес зроблений коротким і зрозумілим: мінімум формальностей, максимум ясності. Ви швидко отримуєте підтвердження та можете спокійно продовжити планування відпустки. За потреби зручно уточнити деталі через WhatsApp, що особливо цінно, коли ви вже в дорозі або маєте щільний графік у місті. Такий підхід зменшує стрес перед бронюванням і дає відчуття контролю. Ви бачите логічний шлях від вибору формату до підтвердження участі без заплутаної багатокрокової комунікації."
    },
    {
      "heading": "Що робить Cucina Roma особливим вибором",
      "paragraph": "Cucina Roma поєднує три речі, за які гості повертаються та рекомендують формат іншим: теплу атмосферу, практичний підхід і сервіс, зрозумілий для україномовної аудиторії. Тут не створюють дистанцію між гостем і процесом, навпаки - вас включають у подію з першої хвилини. Саме тому досвід відчувається живим і щирим. Ви знайомитеся з італійською кухнею не як спостерігач, а як учасник. Якщо шукаєте cooking classes in Rome, де важливі не гучні обіцянки, а реальні емоції та комфортна організація, ця сторінка допоможе швидко перейти до формату, який найкраще підійде саме вам."
    }
  ],
  relatedMasters: [
    {
      href: "/master/pizza_tiramisu",
      name: "Pizza + Tiramisu Class",
      durationHours: 2,
      priceEur: 75,
    },
    {
      href: "/master/pasta_tiramisu",
      name: "Pasta + Tiramisu Class",
      durationHours: 2,
      priceEur: 75,
    },
    {
      href: "/master/nioki_tiramisu",
      name: "Gnocchi + Tiramisu Class",
      durationHours: 2,
      priceEur: 75,
    },
    {
      href: "/master/wino",
      name: "Wine Tasting Experience",
      durationHours: 2,
      priceEur: 80,
    },
  ],
};

export default function CookingClassRomeSeoPage() {
  return <SeoLandingPage content={content} />;
}
