import React from 'react'

import * as Card from 'components/Card'
import { Button } from 'components/Button'
import { Container } from 'components/Question/Container'

const Question = ({ value, onResponse, ...props }) => {
  return (
    <Container {...props}>
      <p className="question__category">{value.category}</p>
      <Card.Container>
        <p
          className="question__content"
          dangerouslySetInnerHTML={{ __html: value.question }}
        />
        <div className="question__options">
          <Button onClick={() => onResponse('True')}>True</Button>
          <Button onClick={() => onResponse('False')}>False</Button>
        </div>
      </Card.Container>
    </Container>
  )
}

export default Question
