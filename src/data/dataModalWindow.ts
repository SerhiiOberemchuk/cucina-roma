import { PageType } from "@/components/ModalWindow/useModalStore";

type Data = {
  page: PageType;
  subtitle: string;
  imgUrl: string;
  title: string;
  description: string[];
  root: string;
};
const description = [
  "У вартість входить годинний майстер-клас для однієї особи. Бронювання не є іменим, тому ви можете передати його на ваш розсуд або використати для себе.",
  "Для активації бронювання необхідно написати або зателефонувати до нас. Бронювання відбувається мінімально за два тижні до бажаної дати та часу.",
  "Електронне бронювання є дійсним після покупки протягом 2025 року. Ваша ідеальна подорож у гастрономічний світ Італії! ",
];
const root = "Бронювання є дійсним після покупки протягом 2025 року.";

export const dataModalWindow: Data[] = [
  {
    page: "/pay_card",
    imgUrl: "/images/modal_certificato.jpg",
    title: "Подарунковий сертифікат",
    subtitle: "Сертифікат",
    description: [
      "У вартість одного сертифіката входить майстер-клас для однієї особи. Сертифікат не є іменим, тому ви можете подарувати його на ваш розсуд або використати для себе.",
      "Для активації сертифікату необхідно написати або зателефонувати до нас для попереднього бронювання. Бронювання відбувається мінімально за два тижні до бажаної дати та часу.",
      "Електронний сертифікат є дійсним після покупки протягом 2025 року. Ваш ідеальний подарунок! ",
    ],
    root: "Сертифікат є дійсним після покупки протягом 2025 року.",
  },
  {
    page: "pizza_tiramisu",
    subtitle: "Майстер-клас",
    imgUrl: "/images/modal_pizza.jpg",
    title: "“Приготування піцци та тірамісу”",
    description,
    root,
  },
  {
    page: "pasta_tiramisu",
    subtitle: "Майстер-клас",
    imgUrl: "/images/modal_pasta.jpg",
    title: "“Приготування пасти та тірамісу”",
    description,
    root,
  },
  {
    page: "nioki_tiramisu",
    subtitle: "Майстер-клас",
    imgUrl: "/images/modal_nioki.jpg",
    title: "“Приготування ньокі та тірамісу”",
    description,
    root,
  },
  {
    page: "wino",
    subtitle: "Майстер-клас",
    imgUrl: "/images/modal_wine.jpg",
    title: "“Винна дегустація та італійські закуски”",
    description,
    root,
  },
];
