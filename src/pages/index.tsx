import React, { useState } from 'react'
import { GetStaticProps } from 'next'

import { Container } from '../styles/pages/Home'
import Header from '../components/Header'
import BoxCards from '../components/BoxCards'

const Home: React.FC = ({ data, imgForColor }: any) => {
  return (
    <Container>
      <Header></Header>
      <BoxCards data={data} />
    </Container>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins')
  const data = await response.json()
  const revalidateInSeconds = 60

  return {
    props: {
      data
    },
    revalidate: revalidateInSeconds
  }
}
