import styled from 'styled-components'

interface bgColor {
  color: string
}

export const Container = styled.div`
  width: 330px;
  height: 410px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 8px;
  overflow: hidden;
  margin: 20px 30px;
  background-color: rgba(255, 255, 250, 0.5);
`

export const ImageCoin = styled.div<bgColor>`
  width: 100%;
  height: 40vh;

  background-color: ${props => props.color};

  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    padding: 20px;
    background-color: #fff;
    border-radius: 200px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 110px;
    height: 110px;
  }
`
export const Infos = styled.div`
  width: 100%;
  height: 30vh;
  position: relative;

  background-color: rgba(255, 255, 255);
`
export const BoxColor = styled.div<bgColor>`
  width: 50px;
  height: 50px;
  position: absolute;

  bottom: 0;
  right: 0;

  border-radius: 10px 0 0 0;
  background-color: ${props => props.color};
`

export const Text = styled.div``
export const NameAndPrice = styled.div<bgColor>`
  width: 100%;
  height: 50px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 15px;
  margin-top: 15px;

  font-size: 20px;
  text-transform: uppercase;
  color: black;
  
  label {
    position: absolute;
    font-size: 15px;
    top: -2px;

    font-weight: bold;
    color: ${props => props.color};
  }
`

export const BoxVariation = styled.div`
  width: 240px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`
