import {useContext} from 'react'
import {AppContext} from '../../context/app.context'
import {FirstLevelMenuItem, IPageItem} from '../../interfaces/menu.interface'
import styles from './Menu.module.css'
import CoursesIcon from './icons/courses.svg'
import ServicesIcon from './icons/services.svg'
import ProductsIcon from './icons/products.svg'
import BooksIcon from './icons/books.svg'
import {TopLevelCategory} from '../../interfaces/page.interface'
import cn from 'classnames'

const firstLevelMenu: FirstLevelMenuItem[] = [
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

export const Menu = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext)

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <a href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id == firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>

            </a>
            {
              m.id == firstCategory && buildSecondLevel(m)
            }
          </div>
        ))}
      </>
    )
  }

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>
              {m._id.secondCategory}
              <div className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened
              })}>
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const buildThirdLevel = (pages: IPageItem[], route: string) => {
    return (
      pages.map((page) => (
        <a href={`/${route}/${page.alias}`} key={page.alias} className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: false
        })}>
          {page.category}
        </a>))
    )
  }

  return <div className={styles.menu}>{buildFirstLevel()}</div>
}

/*<ul>
      {menu.map((item) => (
        <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
      ))}
    </ul> */
