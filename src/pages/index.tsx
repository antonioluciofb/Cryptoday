import React, { useState } from 'react'

import { Container } from '../styles/pages/Home'
import Header from '../components/Header'
import BoxCards from '../components/BoxCards'
import { GetStaticProps } from 'next'

import Api from './api/[url]'

const Home: React.FC = ({ data }: any) => {
  const [coins, setCoins] = useState(data)

  function matchSearch(event: any) {
    const searchFilter = data.filter(
      coin =>
        coin.symbol.includes(event.target.value) ||
        coin.name.toLowerCase().includes(event.target.value.toLowerCase())
    )

    setCoins(searchFilter)
  }

  return (
    <Container>
      <Header></Header>
      <input
        type="text"
        placeholder="Coin or Symbol"
        onChange={e => matchSearch(e)}
      />
      <BoxCards coins={coins} />
    </Container>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins')
  const data2 = await Api()
  const data = await response.json()
  const revalidateInSeconds = 60

  return {
    props: {
      data
    },
    revalidate: revalidateInSeconds
  }
}
