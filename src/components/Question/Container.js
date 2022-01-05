import styled from 'styled-components'

export const Container = styled.div`
  width: min(98vw, 450px);

  .question__category {
    text-align: center;
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
  }

  .question__content {
    margin: 1rem 0 2rem;
    text-align: center;
    color: var(--text-primary);
  }

  .question__options {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
`
