/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};

type Category = { id: string; name: string; photo?: string };

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

type Operation = Cost | Profit;

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

const generateNumber = (count: number) => Math.floor(Math.random() * count);

const getRandomElement = (array: string[]): string => {
  const randomId = generateNumber(array.length);
  return array[randomId];
};

const products: string[] = [
  'Кольцо из золота',
  'Серьги из золота',
  'Цепь из золота',
  'Подвеска и золота',
  'Браслет из серебра',
  'Брошь из золота',
];
const productDescriptions: string[] = ['Современно', 'Эстетично', 'Представительно', 'Оригинально', 'Неповторимо'];
const categories: string[] = ['Кольца', 'Серьги', 'Цепи', 'Подвески', 'Браслеты', 'Броши'];

const photos: string[] = [
  'https://zolotodiskont.ru/modules/photogallery/src/images/cache/199852-1030-1030-1-b504518b.webp',
  'https://zolotodiskont.ru/modules/photogallery/src/images/cache/187843-1030-1030-1-73ad5338.webp',
  'https://zolotodiskont.ru/modules/photogallery/src/images/cache/168696-1030-1030-1-24c6878d.webp',
  'https://zolotodiskont.ru/modules/photogallery/src/images/cache/200140-1030-1030-1-9a0bb748.webp',
  'https://zolotodiskont.ru/modules/photogallery/src/images/cache/199524-1030-1030-1-7e802e2b.webp',
  'https://zolotodiskont.ru/modules/photogallery/src/images/cache/197714-1030-1030-1-0d598e32.webp',
  'https://zolotodiskont.ru/modules/photogallery/src/images/cache/200143-1030-1030-1-83bb537c.webp',
];
const discountRate: number = 20;
export const createRandomProduct = (createdAt: string): Product => {
  const id: string = generateNumber(1000).toString();
  const name: string = getRandomElement(products);
  const photo: string = getRandomElement(photos);
  const desc: string = getRandomElement(productDescriptions) + ' ' + name;
  const oldPrice: number = generateNumber(10000);
  const price: number = oldPrice * (1 - discountRate / 100);
  const category: Category = {
    id: generateNumber(100).toString(),
    name: getRandomElement(categories),
    photo: getRandomElement(photos),
  };

  return { id, name, photo, desc, createdAt, oldPrice, price, category };
};

const operations = ['Покупка', 'Продажа', 'Кредит', 'Рассрочка'];
const operationDescriptions = [
  'Приобретение товара',
  'Продажа товара',
  'Приобретение товара в кредит',
  'Приобретение товара в рассрочку',
];
type OperationType = 'Cost' | 'Profit';
const operationTypes: Array<OperationType> = ['Cost', 'Profit'];
export const createRandomOperation = (createdAt: string): Operation => {
  const id: string = generateNumber(1000).toString();
  const name: string = getRandomElement(operations);
  const desc: string = getRandomElement(operationDescriptions);
  const amount: number = generateNumber(10);
  const category: Category = {
    id: generateNumber(1000).toString(),
    name: getRandomElement(categories),
  };
  const type = operationTypes[generateNumber(operationTypes.length)];

  return { id, name, desc, createdAt, amount, category, type };
};
