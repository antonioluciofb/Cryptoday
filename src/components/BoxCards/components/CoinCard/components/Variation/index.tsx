import React from 'react'
import { Container, Text, Positive, Negative } from './style'

function Variation({ interval, fluctuation, color, prices }: any) {
  const finalValue = fluctuation.toFixed(1)

  return (
    <Container>
      <Text textColor={color}>{interval}</Text>
      {fluctuation > 0 ? (
        <Positive>{`+${finalValue}%`}</Positive>
      ) : (
        <Negative>{`${finalValue}%`}</Negative>
      )}
    </Container>
  )
}

export default Variation
