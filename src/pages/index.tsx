import React from 'react'

import { Container } from '../styles/pages/Home'
import Header from '../components/Header'
import BoxCards from '../components/BoxCards'

const Home: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <BoxCards />
    </Container>
  )
}

export default Home
