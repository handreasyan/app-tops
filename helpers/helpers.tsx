import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import {TopLevelCategory} from "../interfaces/page.interface";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ServicesIcon from "./icons/services.svg";
import ProductsIcon from "./icons/products.svg";

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

export const priceRu = (price: number) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '_').concat(' ₽')