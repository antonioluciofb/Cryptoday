import React from 'react'
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

import Variation from './components/Variation'

const CoinCard = ({ item }: item) => {
  const { brl } = item.market_data.current_price
  const {
    price_change_percentage_24h,
    price_change_percentage_7d,
    price_change_percentage_30d
  } = item.market_data

  function whatsColor() {
    return 'rgb(0,0,0,1)'
  }

  return (
    <Container>
      <ImageCoin color={whatsColor()}>
        <div className="wrapper">
          <img src={item.image.large} alt="" />
        </div>
      </ImageCoin>
      <Infos>
        <NameAndPrice color={whatsColor()}>
          <Text>{item.name}</Text>
          <label>{item.symbol}</label>
          <Text>R${brl}</Text>
        </NameAndPrice>
        <BoxColor color={whatsColor()} />
        <BoxVariation>
          <Variation
            interval="Day"
            fluctuation={price_change_percentage_24h}
            color={whatsColor()}
          ></Variation>
          <Variation
            interval="Week"
            fluctuation={price_change_percentage_7d}
            color={whatsColor()}
          ></Variation>
          <Variation
            interval="Month"
            fluctuation={price_change_percentage_30d}
            color={whatsColor()}
          ></Variation>
        </BoxVariation>
      </Infos>
    </Container>
  )
}

export default CoinCard
