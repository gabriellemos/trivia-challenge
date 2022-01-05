import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import Question from 'components/Question'
import { Container, QuestionContainer } from 'pages/Challenge/Container'
import withTriviaQuestions from 'utils/withTriviaQuestions'

const Challenge = ({ questions }) => {
  const [current, setCurrent] = useState(0)
  const [results, setResults] = useState([])
  const navigate = useNavigate()

  const questionAmount = useMemo(() => {
    return questions.length
  }, [questions])

  useEffect(() => {
    if (questionAmount > 0 && current === questionAmount) {
      navigate('/results', { state: { questions, results } })
    }
  }, [current])

  const handleResponse = (isCorret) => {
    setCurrent((current) => current + 1)
    setResults((current) => [...current, isCorret])
  }

  const getModifier = (index) => {
    if (index > current) {
      return 'pending'
    } else if (index === current) {
      return 'active'
    } else {
      return 'resolved'
    }
  }

  return (
    <Container isLoading={questions.length === 0}>
      {questions.map((question, index) => {
        return (
          <QuestionContainer
            key={index}
            className={`status--${getModifier(index)}`}
          >
            <div className={`question question--${getModifier(index)}`}>
              <Question value={question} onResponse={handleResponse} />
            </div>
          </QuestionContainer>
        )
      })}
      {questionAmount === 0 && <p className="loader">Loading...</p>}
      {questionAmount > 0 && current < questionAmount && (
        <p className="progress">
          {current + 1} of {questionAmount}
        </p>
      )}
    </Container>
  )
}

export default withTriviaQuestions(Challenge)
