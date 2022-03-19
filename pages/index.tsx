import {GetStaticProps} from 'next'
import {useState} from 'react'
import {Htag, Button, Ptag, Tag, Rating, Input, Textarea} from '../components/index'
import {withLayout} from '../layout/Layout'
import axios from 'axios'
import {IMenuItem} from '../interfaces/menu.interface'

function Home({menu, firstCategory}: HomeProps): JSX.Element {
  const [rating, setRating] = useState(4)

  return (
    <>

      <Input placeholder={'texst'}/>
      <Textarea/>
      <br/>
      <br/>
      <br/>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
      <Htag tag="h1">H1 Title</Htag>
      <Htag tag="h2">H2 Title</Htag>
      <Button apperance="ghost" arrow="right">
        Ghost BTN
      </Button>
      <Button apperance="primary" arrow="down">
        Primary BTN
      </Button>
      <Ptag size="s">Size S</Ptag>
      <Ptag size="m">Size M</Ptag>
      <Ptag size="l">Size L</Ptag>

      <Tag size="s" color="red">
        Size S color Red
      </Tag>
      <Tag size="s" color="ghost">
        Size S color ghost
      </Tag>
      <Tag color="grey">Size null color grey</Tag>
      <Tag size="m" color="green">
        Size M color green
      </Tag>
      <Tag size="m" color="primary">
        Size M color primary
      </Tag>
    </>
  )
}

export default withLayout(Home)

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
