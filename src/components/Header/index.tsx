import React from 'react'
import { Container, Text } from './style'

import Logo from '../../assets/logo.png'

const Header: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
      <Text>CRYPTODAY</Text>
    </Container>
  )
}

export default Header
