import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`

export const ContainerCoin = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  padding: 0px 30px;

  h2 {
    margin: 100px 0px;
  }
`

export const Coins = styled.div``

export const FavoritesCoins = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-bottom: 5px solid white;
`

export const AnotherCoins = styled.div``

export const SearchInput = styled.input`
  width: 20%;
  height: 35px;

  text-align: center;
  font-size: 20px;
  color: #000;

  border: none;
  border-radius: 5px;
  /* background: rgba(255, 255, 255, 0.5); */

  margin: 20px;

  :focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    width: 60%;
  }
`
