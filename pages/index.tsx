import { useState } from 'react'
import { Htag, Button, Ptag, Tag, Rating } from '../components/index'
import { withLayout } from '../layout/Layout'

// next lesson => 11 - 001 SSR

function Home(): JSX.Element {
  const [rating, setRating] = useState(4)

  return (
    <>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
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
