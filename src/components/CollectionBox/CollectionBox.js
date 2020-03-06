import React from 'react'

import { Container, ImageContainer, Content } from './styled'

const CollectionBox = ({ title, img, url, size }) => (
  <Container size={size ? size : ''}>
    <ImageContainer>
      <img src={img} alt={title} />
    </ImageContainer>

    <Content title={title} url={url} />
  </Container>
)

export default CollectionBox
