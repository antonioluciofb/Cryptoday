import React from 'react'
import { Container, Text } from './style'

import CoinCard from './components/CoinCard'

function BoxCards({ coins }: any) {
  return (
    <Container>
      {coins.map(item => {
        return <CoinCard item={item} />
      })}
    </Container>
  )
}

export default BoxCards
