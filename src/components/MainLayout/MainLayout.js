import React from 'react'

/* Components */
import Menu from 'components/Menu'

/* Styled */
import { Container } from './styled'

const MainLayout = ({ children }) => (
  <Container>
    <Menu />
    {children}
  </Container>
)

export default MainLayout
