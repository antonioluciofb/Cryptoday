import React from 'react'
import { Container, Text } from './style'

import CoinCard from './components/CoinCard'

function BoxCards({ coins }: any) {
  return (
    <Container>
      {coins.length > 0 ?
        coins.map((item, i) => {
          return <CoinCard key={i} item={item} />
        }) : <h2>Descupe ainda não temos essa moeda</h2>}
    </Container>
  )
}

export default BoxCards
