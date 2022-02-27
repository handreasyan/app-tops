import {GetStaticProps} from 'next'
import {withLayout} from '../layout/Layout'
import axios from 'axios'
import {IMenuItem} from '../interfaces/menu.interface'

function Search(): JSX.Element {

  return (
    <>
      Search
    </>
  )
}

export default withLayout(Search)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0

  const {data: menu} = await axios.post<IMenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory,
    }
  )

  return {
    props: {menu, firstCategory},
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: IMenuItem[]
  firstCategory: number
}
