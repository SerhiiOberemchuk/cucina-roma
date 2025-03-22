export type DataCardMaster = {
  src: string;
  name: string;
  prise: number;
  duration: number;
  linkTitle: string;
  href: string;
};

export const dataMaster: DataCardMaster[] = [
  {
    src: "/images/master_pizza.jpg",
    name: "Приготуємо піцу і тірамісу",
    prise: 80,
    duration: 2,
    linkTitle: "Замовити",
    href: "",
  },
  {
    src: "/images/master_pasta.jpg",
    name: "Готуємо пасту та тірамісу",
    prise: 80,
    duration: 2,
    linkTitle: "Замовити",
    href: "",
  },
  {
    src: "/images/master_gniochi.jpg",
    name: "Приготуємо ньокі та тірамісу",
    prise: 80,
    duration: 2,
    linkTitle: "Замовити",
    href: "",
  },
  {
    src: "/images/master_vino.jpg",
    name: "Винна дегустація, італійські закуски",
    prise: 80,
    duration: 2,
    linkTitle: "Замовити",
    href: "",
  },
];
