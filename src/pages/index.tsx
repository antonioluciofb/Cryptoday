import React from 'react'

import { Container } from '../styles/pages/Home'
import Logo from '../assets/logo.png'

const Home: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
      <p>CRYPTODAY</p>
    </Container>
  )
}

export default Home
