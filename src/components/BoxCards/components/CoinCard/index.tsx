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
  const {
    price_change_percentage_24h,
    price_change_percentage_7d,
    price_change_percentage_30d
  } = item.market_data

  useEffect(() => {
    const excludeColors: any = {
      ksm: '.',
      atom: '.',
      miota: '.',
      cro: '.'
    }
    async function fetchData() {
      let { color } = await getColor(item.image.thumb)

      if (excludeColors[item.symbol]) {
        setBgColor('rgb(91, 91, 91)')
        return null
      }

      setBgColor(`rgba(${color[0] - 90},${color[1] - 90},${color[2] - 90},0.8)`)
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
          <Variation
            interval="Day"
            fluctuation={price_change_percentage_24h}
            color={bgcolor}
          ></Variation>
          <Variation
            interval="Week"
            fluctuation={price_change_percentage_7d}
            color={bgcolor}
          ></Variation>
          <Variation
            interval="Month"
            fluctuation={price_change_percentage_30d}
            color={bgcolor}
          ></Variation>
        </BoxVariation>
      </Infos>
    </Container>
  )
}

export default CoinCard
