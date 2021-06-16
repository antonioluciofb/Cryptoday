import styled from 'styled-components'

interface ColorText {
  textColor: string
}

export const Container = styled.div`
  width: 80px;
  height: 80px;

  margin: 0 4px;

  border-right: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Text = styled.p<ColorText>`
  color: ${props => props.textColor};
  font-weight: bold;
`
export const Positive = styled.p`
  color: green;

  margin: 10px 0;
  font-weight: bold;
`
export const Negative = styled.p`
  color: red;

  margin: 10px 0;
  font-weight: bold;
`
