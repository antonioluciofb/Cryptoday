import React from 'react'
import { Container, Text } from './style'

import CoinCard from './components/CoinCard'
import mock from '../../../mock'

function BoxCards({ coins }: any) {
  return (
    <Container>
      {coins.map(item => (
        <CoinCard item={item} />
      ))}
    </Container>
  )
}

export default BoxCards
