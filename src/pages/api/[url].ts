import type { NextApiRequest, NextApiResponse } from 'next'
const { getColorFromURL } = require('color-thief-node')

export default async function getColor() {
  const response = await fetch('https://api.coingecko.com/api/v3/coins')
  const data = await response.json()
  const allColor = Promise.all(
    data.map(async coin => {
      const getColor = await getColorFromURL(coin.image.large)
      const color = `rgb(${getColor[0]},${getColor[1]},${getColor[2]})`
      return { ...coin, color }
    })
  )
  return allColor
}
