import React, { useEffect, useState } from 'react'
import {
  Container,
  ImageCoin,
  Infos,
  Text,
  NameAndPrice,
  BoxColor,
  BoxVariation
} from './style'

interface item {
  item: any
}

import getColor from '../../../../utils/getColor'
import Variation from './components/Variation'

const CoinCard = ({ item }: item) => {
  const [bgcolor, setBgColor] = useState('')
  const { brl } = item.market_data.current_price

  useEffect(() => {
    async function fetchData() {
      let { color } = await getColor(item.image.thumb)
      if (color[0] === 242) {
        color = [187, 160, 51]
      }
      setBgColor(`rgba(${color[0]},${color[1]},${color[2]},0.8)`)
    }
    fetchData()
  }, [])
  return (
    <Container>
      <ImageCoin color={bgcolor}>
        <div className="wrapper">
          <img src={item.image.large} alt="" />
        </div>
      </ImageCoin>
      <Infos>
        <NameAndPrice color={bgcolor}>
          <Text>{item.name}</Text>
          <label>{item.symbol}</label>
          <Text>R${brl}</Text>
        </NameAndPrice>
        <BoxColor color={bgcolor} />
        <BoxVariation>
          <Variation interval="Day" fluctuation={2.5} color={bgcolor}></Variation>
          <Variation interval="Week" fluctuation={2.3} color={bgcolor}></Variation>
          <Variation interval="Month" fluctuation={2.1} color={bgcolor}></Variation>
        </BoxVariation>
      </Infos>
    </Container>
  )
}

export default CoinCard
