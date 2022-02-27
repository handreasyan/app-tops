import {GetStaticPaths, GetStaticProps, GetStaticPropsContext,} from 'next'
import {withLayout} from '../../layout/Layout'
import axios from 'axios'
import {IMenuItem} from '../../interfaces/menu.interface'
import {ITopPageModel, TopLevelCategory} from '../../interfaces/page.interface'
import {ParsedUrlQuery} from 'querystring'
import {IProductModel} from '../../interfaces/product.interface'
import {firstLevelMenu} from "../../helpers/helpers";
import TopPageComponent from "../../page-components/TopPageComponent/TopPage.component";

function TopPage({firstCategory, page, products}: TopPageProps): JSX.Element {
  return <TopPageComponent page={page} firstCategory={firstCategory} products={products}/>
}

export default withLayout(TopPage)

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = []

  for (const m of firstLevelMenu) {
    const {data: menu} = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
      {firstCategory: m.id}
    )
    paths = paths.concat(menu.flatMap((mnu) => mnu.pages.map((p) => `/${m.route}/${p.alias}`)))
  }

  return {paths, fallback: true}
}

export const getStaticProps: GetStaticProps<TopPageProps> = async (
  {params}: GetStaticPropsContext<ParsedUrlQuery>) => {

  if (!params) {
    return {notFound: true}
  }

  const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type)
  if (!firstCategoryItem) {
    return {notFound: true}
  }

  try {
    const {data: menu} = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
      {firstCategory: firstCategoryItem.id}
    )
    if (menu.length === 0) return {notFound: true}


    const {data: page} = await axios.get<ITopPageModel>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`
    )

    const {data: products} = await axios.post<IProductModel[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`,
      {category: page.category, limit: 10}
    )
    return {
      props: {menu, firstCategory: firstCategoryItem.id, page, products},
    }

  } catch (e) {
    return {notFound: true}
  }

}

interface TopPageProps extends Record<string, unknown> {
  menu: IMenuItem[]
  firstCategory: TopLevelCategory;
  page: ITopPageModel;
  products: IProductModel[]
}
