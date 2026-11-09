// Facts from veon/client.json only (ids in comments). Nothing here is invented.
export const contacts = {
  phoneHref: "tel:+380676354554", // company.contacts.phones[0]
  phoneText: "(067) 635 45 54",
  email: "info.dr.armstrong@gmail.com", // company.contacts.emails[0]
  telegram: "https://t.me/Dr_Armstrong_bot", // company.contacts.messengers[0]
  instagram: "https://www.instagram.com/dr_armstrong_mc/", // socials[0], confirmed
  facebook: "https://www.facebook.com/people/Doctor-Armstrong/61579765269572/", // socials[1], confirmed
};

export const futureNote = "Розділ у розробці";

// B-F007: the same hours in all three centres
export const hours = { weekdays: "Пн–Пт 08:00–20:00", saturday: "Сб 09:00–15:00", sunday: "Нд — вихідний" };

export interface Centre {
  id: string;
  photoAlt: string;
  metro: string;
  district: string;
  street: string;
  map: string;
  rating: string;
  reviews: string;
  streetAddress: string;
}

// company.contacts.addresses[0..2], company.geography, B-F010 (Google Maps ratings shown on the client's site)
export const centres: Centre[] = [
  { id: "lukianivska", photoAlt: "Вхід до центру Doctor Armstrong на вул. Золотоустівській, 25", metro: "Лук'янівська", district: "Шевченківський район", street: "вул. Золотоустівська, 25", streetAddress: "вул. Золотоустівська, 25", map: "https://maps.app.goo.gl/nUq8orSsYYMHhNT38", rating: "4.9", reviews: "29 відгуків" },
  { id: "ipodrom", photoAlt: "Вхід до центру Doctor Armstrong на вул. Здановської, 58-А", metro: "Іподром", district: "Голосіївський район", street: "вул. Здановської, 58-А", streetAddress: "вул. Здановської, 58-А", map: "https://maps.app.goo.gl/M5MeXC32VNfzoA8E7", rating: "4.8", reviews: "16 відгуків" },
  { id: "pozniaky", photoAlt: "Вхід до центру Doctor Armstrong на просп. Бажана, 1-М", metro: "Позняки", district: "Дарницький район", street: "просп. Бажана, 1-М", streetAddress: "просп. Бажана, 1-М", map: "https://maps.app.goo.gl/g6andQ8Yr1td8e76A", rating: "4.5", reviews: "24 відгуки" },
];

// 12 conditions from the current homepage (audit/screens/home-desktop-s03.png) + B-F005
export const conditions = [
  "Біль у спині та шиї",
  "Остеохондроз",
  "Порушення постави",
  "Біль у суглобах",
  "Обмежена рухливість суглобів",
  "Артрит",
  "Після травм",
  "Після ортопедичних операцій",
  "Після ендопротезування",
  "Після інсульту",
  "Вертебрологічні захворювання",
  "Слабкість у м'язах",
  "Порушення сну",
  "Відновлення активності після вагітності",
];

export const nav = [
  { href: "#problemy", label: "З чим звертаються" },
  { href: "#pershyj-vizyt", label: "Перший візит" },
  { href: "#posluhy", label: "Послуги" },
  { href: "#centry", label: "Центри" },
  { href: "#zapys", label: "Контакти" },
];
