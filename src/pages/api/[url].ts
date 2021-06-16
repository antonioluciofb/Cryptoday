import type { NextApiRequest, NextApiResponse } from 'next'
const { getColorFromURL } = require('color-thief-node')

async function getColor(url) {
  const replace = url.replace(/[,]/g, '/')
  const dominantColor = await getColorFromURL(replace)
  return dominantColor
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query
  const color = await getColor(url)
  res.send({ color })
}
