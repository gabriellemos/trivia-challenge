import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  width: min(98vw, 450px);
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .error {
    color: var(--wrong-answer)
  }
`
