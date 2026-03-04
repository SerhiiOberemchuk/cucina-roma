import Link from "next/link";
import Container from "@/components/common/Container";
import LinkYelow from "@/components/common/Links/LinkYelow";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TextBody from "@/components/common/TextBody";
import TextBodyPoint from "@/components/common/TextBodyPoint";
import { dataMaster } from "@/data/dataMaster";
import {
  SeoLandingPageData,
  seoLandingPagesBySlug,
} from "@/data/seoLandingPages";
import { getSeoLongread } from "@/data/seoLongreads";

type Props = {
  page: SeoLandingPageData;
};

type ServiceContent = {
  eyebrow: string;
  intro: string;
  highlights: string[];
  activity: string;
  audience: string;
  result: string;
  atmosphere: string;
  bookingFlow: string;
};

const SERVICE_CONTENT_BY_SLUG: Record<string, ServiceContent> = {
  "cooking-class-rome": {
    eyebrow: "Кулінарні майстер-класи в Римі",
    intro:
      "Шукаєте cooking class Rome українською? На цій сторінці зібрані найпопулярніші формати Cucina Roma: піца, паста, тірамісу, дегустація вина, приватні та сімейні сценарії. Ви можете швидко обрати напрям і перейти до бронювання без зайвих кроків.",
    highlights: [
      "Кілька форматів на вибір: pizza, pasta, tiramisu, wine tasting.",
      "Зручна центральна локація в Римі для туристів.",
      "Зрозумілий процес бронювання онлайн або через WhatsApp.",
      "Підтримка українською протягом всього досвіду.",
      "Ідеально для пар, друзів, родин і міні-груп.",
    ],
    activity: "кулінарні майстер-класи та гастрономічні враження в Римі",
    audience:
      "пари, родини, друзі, невеликі групи та гості, які хочуть живий досвід, а не стандартну екскурсію",
    result:
      "ви отримуєте не просто активність на 2 години, а емоцію подорожі, яку хочеться повторити і згадувати",
    atmosphere:
      "затишний простір у центрі міста, де легко поєднати клас із прогулянкою історичними вулицями",
    bookingFlow:
      "обрати формат, перейти на сторінку майстер-класу, залишити заявку й отримати підтвердження з усіма деталями",
  },
  "pizza-class-rome": {
    eyebrow: "Pizza Class Rome",
    intro:
      "Pizza class Rome у Cucina Roma - це практичний формат, де ви власноруч працюєте з тістом, випікаєте піцу та завершуєте заняття тірамісу. Сторінка створена для гостей, які хочуть не просто подивитися процес, а реально взяти участь.",
    highlights: [
      "Hands-on підхід: тісто, форма, випікання, подача.",
      "У формат включено блок із приготування тірамісу.",
      "Підходить навіть для тих, хто готує піцу вперше.",
      "Зручний для туристичного графіка формат близько 2 годин.",
      "Швидке бронювання та підтвердження дати.",
    ],
    activity: "майстер-клас із приготування піци та тірамісу",
    audience:
      "гості Риму, які хочуть відчути італійську кухню через практику, а не лише через ресторан",
    result:
      "ви йдете з чітким розумінням базових технік і з відчуттям, що створили справжню італійську страву самі",
    atmosphere:
      "дружня кухня-студія, де комфортно і новачкам, і тим, хто вже любить готувати",
    bookingFlow:
      "відкрити сторінку формату Pizza + Tiramisu, обрати дату, залишити контакти й отримати швидке підтвердження",
  },
  "pasta-class-rome": {
    eyebrow: "Pasta Class Rome",
    intro:
      "Pasta class Rome у Cucina Roma підійде тим, хто хоче приготувати пасту власноруч і спробувати тірамісу в одному занятті. Це зрозумілий та комфортний формат для туристів, які цінують практичний досвід та живу атмосферу.",
    highlights: [
      "Handmade pasta крок за кроком у супроводі шефа.",
      "У програмі також є десертний блок із тірамісу.",
      "Можливість обрати формат, близький до gnocchi style досвіду.",
      "Підходить для пар, друзів і сімейних міні-груп.",
      "Просте онлайн-бронювання без довгого листування.",
    ],
    activity: "майстер-клас із пасти та тірамісу",
    audience:
      "мандрівники, які люблять італійську кухню та хочуть отримати практичну навичку під час поїздки",
    result:
      "після класу ви краще розумієте принципи тіста, текстури та подачі і можете повторити це вдома",
    atmosphere:
      "тепла гастрономічна атмосфера в Римі з акцентом на простоту, смак і задоволення від процесу",
    bookingFlow:
      "перейти на сторінку паста-формату, залишити заявку і отримати підтвердження із деталями локації",
  },
  "tiramisu-class-rome": {
    eyebrow: "Tiramisu Class Rome",
    intro:
      "Tiramisu class Rome в Cucina Roma - це чудовий вибір для тих, хто мріє про автентичний італійський десерт. Тірамісу тут подається як частина повного кулінарного досвіду разом із піцою, пастою або іншими форматами.",
    highlights: [
      "Фокус на десерті, який люблять у всьому світі.",
      "Практичний підхід і зрозумілі пояснення крок за кроком.",
      "Можна поєднати з pizza або pasta форматом.",
      "Зручно для пар, друзів і невеликих компаній.",
      "Бронювання на конкретну дату займає кілька хвилин.",
    ],
    activity:
      "десертний кулінарний досвід із тірамісу в рамках повного заняття",
    audience:
      "гості, які хочуть романтичну, смачну й фотогенічну активність у Римі",
    result:
      "ви отримуєте рецепт, практичний досвід і готовий десерт, який створили власноруч",
    atmosphere:
      "невимушена і тепла атмосфера, де важливі смак, емоції та задоволення від процесу",
    bookingFlow:
      "перейти на релевантний майстер-клас, залишити контакти і швидко узгодити дату та час",
  },
  "wine-tasting-rome": {
    eyebrow: "Wine Tasting Rome",
    intro:
      "Wine tasting Rome у Cucina Roma - це формат для гостей, які хочуть відчути італійську культуру через смак вина та гастрономічні pairings. Ідеально для вечора в Римі, романтичного побачення або подарункового досвіду.",
    highlights: [
      "Добірка італійських вин та гастрономічних поєднань.",
      "Зрозумілий супровід і комфортна подача інформації.",
      "Підійде для пар, друзів і камерних компаній.",
      "Зручна локація в центрі Риму.",
      "Швидкий перехід на сторінку бронювання дегустації.",
    ],
    activity:
      "винна дегустація з італійськими закусками та гастрономічними поєднаннями",
    audience:
      "дорослі мандрівники, які хочуть елегантний формат відпочинку після прогулянок містом",
    result:
      "ви не лише дегустуєте, а краще розумієте відмінності смаків, ароматів і поєднань",
    atmosphere: "затишний, неквапливий формат у стилі італійського вечора",
    bookingFlow:
      "відкрити сторінку wine tasting, обрати дату і залишити заявку для підтвердження",
  },
  "private-cooking-class-rome": {
    eyebrow: "Private Cooking Class Rome",
    intro:
      "Private cooking class Rome - найкращий варіант, якщо ви хочете персоналізований досвід у своєму темпі. Формат підходить для пар, днів народження, дружніх компаній і невеликих team building сценаріїв.",
    highlights: [
      "Приватний формат із персональною увагою.",
      "Можливість адаптувати досвід під вашу подію.",
      "Доступні pizza, pasta, tiramisu та wine сценарії.",
      "Зручно для святкувань і special occasions.",
      "Простий шлях до бронювання без складної комунікації.",
    ],
    activity: "приватний кулінарний клас у Римі з гнучким форматом",
    audience:
      "пари, друзі, сім'ї та міні-команди, які цінують індивідуальний підхід",
    result:
      "ви отримуєте подію під себе: темп, атмосфера та акценти узгоджуються до початку заняття",
    atmosphere: "камерна атмосфера з фокусом на ваш настрій і комфорт",
    bookingFlow:
      "перейти на сторінку обраного формату, вказати формат і дату, отримати персональне підтвердження",
  },
  "family-cooking-class-rome": {
    eyebrow: "Family Cooking Class Rome",
    intro:
      "Family cooking class Rome створений для сімей, які подорожують із дітьми та хочуть теплий, безпечний і цікавий досвід у Римі. Формат продуманий так, щоб було комфортно і батькам, і молодшим учасникам.",
    highlights: [
      "Сімейний темп та дружня атмосфера.",
      "Прості та захопливі кроки, які цікаві дітям.",
      "Популярні формати: pizza + tiramisu або pasta + tiramisu.",
      "Легка логістика для туристичного дня в Римі.",
      "Швидке узгодження дати та часу.",
    ],
    activity: "сімейний кулінарний клас із практикою і позитивними емоціями",
    audience:
      "родини з дітьми, які шукають змістовну активність замість стандартного дозвілля",
    result:
      "ви отримуєте спільний досвід, який об'єднує сім'ю і дарує яскраві спогади з подорожі",
    atmosphere:
      "спокійна і доброзичлива атмосфера, де комфортно дітям різного віку",
    bookingFlow:
      "обрати формат на сторінці бронювання, залишити заявку й отримати підтвердження з деталями",
  },
  "ukrainian-speaking-cooking-class-rome": {
    eyebrow: "Ukrainian Speaking Cooking Class",
    intro:
      "Ukrainian speaking cooking class Rome - це формат для гостей, яким важливо отримати повний супровід українською мовою. Ви зосереджуєтесь на процесі й задоволенні від досвіду, а не на мовному бар'єрі.",
    highlights: [
      "Повноцінна комунікація українською під час заняття.",
      "Зрозумілі пояснення навіть для новачків.",
      "Доступні різні формати: pizza, pasta, tiramisu.",
      "Зручний для українських туристів у Римі.",
      "Швидке бронювання через сайт або WhatsApp.",
    ],
    activity: "кулінарний майстер-клас у Римі з україномовним супроводом",
    audience:
      "україномовні мандрівники, які хочуть відчувати себе впевнено на кожному етапі",
    result:
      "ви комфортно проходите весь процес, краще розумієте техніки і отримуєте більше задоволення від заняття",
    atmosphere:
      "дружній простір, де легко ставити запитання і взаємодіяти без напруги",
    bookingFlow:
      "обрати бажаний формат, залишити заявку та отримати підтвердження з усіма деталями українською",
  },
  "cooking-class-near-vatican": {
    eyebrow: "Cooking Class Near Vatican",
    intro:
      "Cooking class near Vatican - зручний вибір для тих, хто будує маршрут навколо центральних локацій Риму. Після прогулянок біля Vatican ви можете легко додати яскравий кулінарний досвід у свій день.",
    highlights: [
      "Зручний для туристів із маршрутом near Vatican.",
      "Формати на вибір: pizza, pasta, tiramisu.",
      "Короткий і зрозумілий сценарій бронювання.",
      "Підходить для пар, друзів і родин.",
      "Комфортна комунікація українською.",
    ],
    activity:
      "кулінарний клас у зручній локації поблизу ключових точок центру Риму",
    audience:
      "туристи, які хочуть оптимізувати час у місті та додати гастро-враження у щільний день",
    result:
      "ви встигаєте побачити місто і отримати повноцінний кулінарний досвід без зайвої логістики",
    atmosphere:
      "формат, який легко вбудовується у денний маршрут і не перевантажує графік",
    bookingFlow:
      "перейти на сторінку обраного формату, вказати дату і отримати швидке підтвердження",
  },
};

function getServiceContent(page: SeoLandingPageData): ServiceContent {
  return (
    SERVICE_CONTENT_BY_SLUG[page.slug] ?? {
      eyebrow: "Cucina Roma",
      intro: page.intro,
      highlights: page.highlights,
      activity: "кулінарний досвід у Римі",
      audience: "туристи, які хочуть живий гастрономічний формат",
      result: "ви отримуєте смачний і практичний досвід",
      atmosphere: "затишна атмосфера в центрі Риму",
      bookingFlow: "перейти на сторінку формату та залишити заявку",
    }
  );
}

function SeoLandingPage({ page }: Props) {
  const service = getServiceContent(page);
  const longreadSections = getSeoLongread(page.slug);
  const renderedLongreadSections =
    longreadSections.length > 0
      ? longreadSections
      : [
          {
            heading: "Про формат",
            paragraph: service.intro,
          },
        ];
  const relatedMasters = dataMaster.filter((item) =>
    page.relatedMasterPages.includes(item.page),
  );

  const ctaMaster = dataMaster.find((item) => item.page === page.ctaMasterPage);
  const relatedSeoPages = page.relatedSeoSlugs
    .map((slug) => seoLandingPagesBySlug[slug])
    .filter(Boolean);

  return (
    <section className="py-10 xl:py-20">
      <Container>
        <SubtitlePoint text={service.eyebrow} />
        <h1 className="textH1 text-main_blue mt-6 max-w-[980px]">{page.h1}</h1>
        <TextBody className="mt-6 max-w-[980px]">{service.intro}</TextBody>

        <ul className="mt-6 flex max-w-[980px] flex-col gap-2">
          {service.highlights.map((item) => (
            <li key={item}>
              <TextBodyPoint>{item}</TextBodyPoint>
            </li>
          ))}
        </ul>

        {ctaMaster && (
          <div className="mt-8 rounded-3xl border p-5 md:p-6">
            <h2 className="textH3 text-main_blue">
              Готові забронювати майстер-клас?
            </h2>
            <TextBody className="mt-2 max-w-[900px]">
              Перейдіть на основну сторінку цього формату та зафіксуйте дату.
              Якщо потрібно, ви завжди можете швидко узгодити деталі перед
              підтвердженням.
            </TextBody>
            <div className="pt-7">
              <LinkYelow
                href={`/master/${ctaMaster.page}`}
                linkTitle="Перейти до бронювання"
                className="mt-4 md:max-w-fit"
              />
            </div>
          </div>
        )}

        <div className="mt-6">
          <Link
            href="/seo/cooking-class-rome"
            className="text-main_blue hover:text-hover inline-flex transition-all duration-300"
          >
            Всі кулінарні формати в Римі
          </Link>
        </div>

        {relatedSeoPages.length > 0 && (
          <div className="mt-8">
            <h2 className="textH3 text-main_blue">Інші популярні формати</h2>
            <ul className="mt-3 flex flex-col gap-2">
              {relatedSeoPages.map((relatedPage) => (
                <li key={relatedPage.slug}>
                  <Link
                    href={`/seo/${relatedPage.slug}`}
                    className="text-main_blue hover:text-hover inline-flex transition-all duration-300"
                  >
                    {relatedPage.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {page.hubSections && (
          <div className="mt-10">
            <h2 className="textH3 text-main_blue">Популярні напрямки</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {page.hubSections.map((section) => (
                <article key={section.title} className="rounded-3xl border p-5">
                  <h3 className="big_text_medium text-main_blue">
                    {section.title}
                  </h3>
                  <TextBody className="mt-2">{section.description}</TextBody>
                  <ul className="mt-3 flex flex-col gap-1">
                    {section.links.map((link) => (
                      <li key={link.slug}>
                        <Link
                          href={`/seo/${link.slug}`}
                          className="text-main_blue hover:text-hover inline-flex transition-all duration-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 space-y-8">
          {renderedLongreadSections.map((section) => (
            <article
              key={section.heading}
              className="rounded-3xl border p-5 md:p-6"
            >
              <h2 className="textH3 text-main_blue">{section.heading}</h2>
              <TextBody className="mt-3 max-w-[980px]">
                {section.paragraph}
              </TextBody>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="textH3 text-main_blue">Рекомендовані формати</h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {relatedMasters.map((item) => (
              <li key={item.page} className="rounded-3xl border p-4">
                <h3 className="big_text_medium text-main_blue">{item.name}</h3>
                <TextBody className="mt-2">{item.duration} години</TextBody>
                <TextBody>{item.prise} EUR</TextBody>
                <Link
                  href={`/master/${item.page}`}
                  className="text-main_blue hover:text-hover mt-3 inline-flex transition-all duration-300"
                >
                  Перейти до сторінки майстер-класу
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default SeoLandingPage;
