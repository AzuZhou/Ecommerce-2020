import React from 'react'
import nanoid from 'nanoid'

/* Components */
import CollectionBox from 'components/CollectionBox'
import { Container } from './styled'

const collections = [
  {
    id: nanoid(),
    title: 'Women',
    url: '/shop/women',
    img: 'http://leutthe.com/wp-content/uploads/2019/10/woman.png'
  },
  {
    id: nanoid(),
    title: 'Men',
    url: '/shop/men',
    img: 'http://leutthe.com/wp-content/uploads/2019/10/men.jpg'
  },
  {
    id: nanoid(),
    title: 'Denim',
    url: '/shop/denim',
    img: 'http://leutthe.com/wp-content/uploads/2019/10/Home-Denim1.jpg',
    size: 'fullSize'
  },
  {
    id: nanoid(),
    title: 'New essentials',
    url: '/shop/new-essentials',
    img: 'http://leutthe.com/wp-content/uploads/2019/10/New-essentials2.jpg',
    size: 'fullSize'
  }
]

const Collections = () => (
  <Container>
    {collections.map(({ id, ...otherCollectionBoxProps }) => (
      <CollectionBox id={id} {...otherCollectionBoxProps} />
    ))}
  </Container>
)

export default Collections
