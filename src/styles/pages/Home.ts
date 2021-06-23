import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    width: 20%;
    height: 35px;

    text-align: center;
    font-size: 20px;
    color: #000;

    border: none;
    border-radius: 5px;
    /* background: rgba(255, 255, 255, 0.5); */

    margin: 20px;

    :focus{
      outline: none;
    }
  }

  background-image: linear-gradient(
    to bottom,
    rgb(0, 0, 0)
    rgb(30, 30, 30),
    rgb(60, 60, 60),
    rgb(75, 75, 75),
  );
`
