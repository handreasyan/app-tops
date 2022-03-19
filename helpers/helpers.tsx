import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import {TopLevelCategory} from "../interfaces/page.interface";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ServicesIcon from "./icons/services.svg";
import ProductsIcon from "./icons/products.svg";
import {number} from "prop-types";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Courses',
    icon: <CoursesIcon/>,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'books',
    name: 'Books',
    icon: <BooksIcon/>,
    id: TopLevelCategory.Books,
  },
  {
    route: 'services',
    name: 'Services',
    icon: <ServicesIcon/>,
    id: TopLevelCategory.Services,
  },
  {
    route: 'products',
    name: 'Products',
    icon: <ProductsIcon/>,
    id: TopLevelCategory.Products,
  },
]

export const priceRu = (price: number) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽')

export const declOfNum = (num: number, titles: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2]
  let index = 0

  if (num % 100 > 4 && num % 100 < 20) index = 2
  else index = cases[(num % 10 < 5) ? num % 10 : 5]

  return titles[index]
}