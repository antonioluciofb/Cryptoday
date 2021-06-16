import React from 'react'
import { Container, Text, Positive, Negative } from './style'

function Variation({ interval, fluctuation, color }: any) {
  return (
    <Container>
      <Text textColor={color}>{interval}</Text>
      {fluctuation > 0 ? (
        <Positive>{`+${fluctuation}%`}</Positive>
      ) : (
        <Negative>{`-${fluctuation}%`}</Negative>
      )}
    </Container>
  )
}

export default Variation
