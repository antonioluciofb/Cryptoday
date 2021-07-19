import React, { useState } from 'react'
import {
  Container,
  CoinContainer,
  Imagecoin,
  Infos,
  Text,
  NameAndPrice,
  BoxColor,
  BoxVariation,
  WrapperImage,
  FavoriteButton
} from './style'

interface item {
  item: any
  selectCard: any
  favorite?: boolean
}

import heart from 'react-useanimations/lib/heart'
import Variation from './components/Variation'
import UseAnimations from 'react-useanimations'

const CoinCard = ({ item, selectCard, favorite }: item) => {
  const [Favorite, setFavorite] = useState(false)
  const { brl } = item.market_data.current_price
  const {
    price_change_percentage_24h,
    price_change_percentage_7d,
    price_change_percentage_30d
  } = item.market_data

  function whatsColor() {
    return 'rgb(0, 49, 84, 0.4)'
  }

  const add = (symbol?: any): void => {
    setFavorite(prev => !prev)
    selectCard(symbol)
  }

  return (
    <Container>
      <CoinContainer color={whatsColor()}>
        <WrapperImage>
          <Imagecoin src={item.image.large} alt="" />
        </WrapperImage>
        <FavoriteButton color={whatsColor()} onClick={() => add(item.symbol)}>
          <UseAnimations
            reverse={favorite || Favorite}
            animation={heart}
            size={50}
          />
        </FavoriteButton>
      </CoinContainer>
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
