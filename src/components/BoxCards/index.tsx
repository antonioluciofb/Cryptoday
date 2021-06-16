import React from 'react'
import { Container, Text } from './style'

import CoinCard from './components/CoinCard'
import mock from '../../../mock'

const BoxCards: React.FC = () => {
  console.log('Here ============>', mock)
  return (
    <Container>
      {mock.map(item => (
        <CoinCard item={item} />
      ))}
    </Container>
  )
}

export default BoxCards
