import React from 'react'
import { Container, Text } from './style'

import CoinCard from './components/CoinCard'
import mock from '../../../mock'

function BoxCards({ coins, search }: any) {
  console.log('Here ============>', search)
  return (
    <Container>
      {coins.map(item => {
        if (search === '') {
          return <CoinCard item={item} />
        }
        if (item.symbol === search || item.name === search) {
          console.log('Here ============>', item.name, search)
          return <CoinCard item={item} />
        }
      })}
    </Container>
  )
}

export default BoxCards
