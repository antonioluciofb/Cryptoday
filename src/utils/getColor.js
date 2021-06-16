import API from '../../API'

function Replace(url) {
  const replace = url.replace(/[/]/g, ',')
  return replace
}

async function getColor(src) {
  if (src) {
    const replace = Replace(src)
    const dominantColor = await API.get(replace)
    return dominantColor.data
  }
}

export default getColor
