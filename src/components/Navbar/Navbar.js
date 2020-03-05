import React from 'react'
import nanoid from 'nanoid'

/* Components */
import NavbarItem from 'components/NavbarItem'
import { Container } from './styled'

const tabs = [
  { id: nanoid(), title: 'Shop', url: '/shop' },
  { id: nanoid(), title: 'Contact', url: '/contact' },
  { id: nanoid(), title: 'Sign in', url: '/login' }
]
const Navbar = () => (
  <Container>
    {tabs.map(({ id, ...otherNavbarItemProps }) => (
      <NavbarItem id={id} {...otherNavbarItemProps} />
    ))}
  </Container>
)

export default Navbar
