import React from 'react'

import * as Card from 'components/Card'
import { Button } from 'components/Button'
import { Container } from 'components/Question/Container'

const Question = ({ value, onResponse, ...props }) => {
  const handleResponse = (response) => {
    if (response === value.correct_answer) {
      onResponse(true)
    } else {
      onResponse(false)
    }
  }

  return (
    <Container {...props}>
      <p className="question__category">{value.category}</p>
      <Card.Container>
        <p
          className="question__content"
          dangerouslySetInnerHTML={{ __html: value.question }}
        />
        <div className="question__options">
          <Button onClick={() => handleResponse('True')}>True</Button>
          <Button onClick={() => handleResponse('False')}>False</Button>
        </div>
      </Card.Container>
    </Container>
  )
}

export default Question
