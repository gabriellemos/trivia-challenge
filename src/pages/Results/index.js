import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import * as Card from 'components/Card'
import { Button } from 'components/Button'
import { Container, Result } from 'pages/Results/Styles'

const Results = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isCorrect = (question, index) => {
    return question.correct_answer === results[index]
  }

  const { questions, results } = useMemo(() => {
    return location.state
  }, [])

  const score = useMemo(() => {
    return questions.reduce((acc, question, index) => {
      if (isCorrect(question, index)) {
        acc++
      }
      return acc
    }, 0)
  }, [])

  return (
    <Container>
      <p className="score">
        You scored {score} / {questions.length}
      </p>
      <Card.Container className="noPaddingX">
        <table>
          <tbody>
            {questions.map((question, index) => {
              const answer = results[index]
              return (
                <Result isCorrect={isCorrect(question, index)}>
                  <td className="result__answer">
                    {answer}
                  </td>
                  <td
                    className="result__content"
                    dangerouslySetInnerHTML={{ __html: question.question }}
                  />
                </Result>
              )
            })}
          </tbody>
        </table>
      </Card.Container>
      <Button onClick={() => navigate('/')}>PLAY AGAIN?</Button>
    </Container>
  )
}

export default Results
