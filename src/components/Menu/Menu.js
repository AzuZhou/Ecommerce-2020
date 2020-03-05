import React from 'react'

/* Components */
import Navbar from 'components/Navbar'

/* Styled */
import { Container, LogoContainer, MenuLinks, Cart } from './styled'

/* Assets */
import CartIcon from 'components/svg/Cart'

const Menu = () => (
  <Container>
    <LogoContainer>
      <img
        src={'http://leutthe.com/wp-content/uploads/2019/08/leutthe-logo2.png'}
        alt={'Le Utthe'}
      />
    </LogoContainer>

    <MenuLinks>
      <Navbar />

      <Cart>
        <CartIcon />
      </Cart>
    </MenuLinks>
  </Container>
)

export default Menu
