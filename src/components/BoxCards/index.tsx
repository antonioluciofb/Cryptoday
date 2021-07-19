import React, { useEffect, useState } from 'react'
import {
  Container,
  ContainerCoin,
  Coins,
  FavoritesCoins,
  AnotherCoins,
  SearchInput
} from './style'

import CoinCard from './components/CoinCard'

interface IAddFavorite {
  symbol: string
}

function BoxCards({ data }: any) {
  const [coins, setCoins] = useState(data)
  const [favoriteCoins, setFavoriteCoins] = useState([])

  function matchSearch(event: any) {
    const searchFilter = data.filter(
      coin =>
        coin.symbol.includes(event.target.value) ||
        coin.name.toLowerCase().includes(event.target.value.toLowerCase())
    )

    setCoins(searchFilter)
  }

  useEffect(() => {
    const favorites = localStorage.getItem('favorite')
    const arrayFavorites = favorites ? favorites.split(',') : []
    setFavoriteCoins(arrayFavorites)
  }, [])

  const addFavorite = (symbol): void => {
    const favorites = localStorage.getItem('favorite')
    const arrayFavorites = favorites ? favorites.split(',') : []
    if (favorites && favorites.includes(symbol)) {
      let FavoriteWithoutLastSymbol = arrayFavorites.filter(
        item => item !== symbol
      )

      if (FavoriteWithoutLastSymbol.length === 1) {
        localStorage.removeItem('favorite')
        FavoriteWithoutLastSymbol = []
      }

      setFavoriteCoins(FavoriteWithoutLastSymbol)
      return localStorage.setItem('favorite', [
        FavoriteWithoutLastSymbol
      ] as any)
    }

    setFavoriteCoins(prev => [...prev, symbol])
    localStorage.setItem('favorite', [favorites, symbol] as any)
  }

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Coin or Symbol"
        onChange={e => matchSearch(e)}
      />
      <Coins>
        {console.log('Here ============>', favoriteCoins)}
        {favoriteCoins.length > 0 && (
          <FavoritesCoins>
            <h2>Favorites</h2>
            <ContainerCoin>
              {coins.map((item, i) => {
                if (favoriteCoins.includes(item.symbol)) {
                  return (
                    <CoinCard
                      key={i}
                      item={item}
                      favorite={true}
                      selectCard={symbol => addFavorite(symbol)}
                    />
                  )
                }
              })}
            </ContainerCoin>
          </FavoritesCoins>
        )}
        <AnotherCoins>
          <ContainerCoin>
            {coins.length > 0 ? (
              coins.map((item, i) => {
                if (!favoriteCoins.includes(item.symbol)) {
                  return (
                    <CoinCard
                      key={i}
                      item={item}
                      selectCard={symbol => addFavorite(symbol)}
                    />
                  )
                }
              })
            ) : (
              <h2>Descupe ainda não temos essa moeda</h2>
            )}
          </ContainerCoin>
        </AnotherCoins>
      </Coins>
    </Container>
  )
}

export default BoxCards
