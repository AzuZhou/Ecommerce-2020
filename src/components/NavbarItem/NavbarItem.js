import React from 'react'

import { Container } from './styled'

const NavbarItem = ({ title, url }) => <Container to={url}>{title}</Container>

export default NavbarItem
