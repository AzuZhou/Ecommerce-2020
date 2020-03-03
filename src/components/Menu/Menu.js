import React from 'react'

/* Components */
import Navbar from 'components/Navbar'

/* Styled */
import { Container, LogoContainer } from './styled'

const Menu = () => (
  <Container>
    <LogoContainer>Logo</LogoContainer>
    <h1>Menu</h1>
    <Navbar />
  </Container>
)

export default Menu
