import React, { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import * as Card from 'components/Card'
import { Button } from 'components/Button'
import { Container } from 'pages/Home/Styles'

const Home = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const renderError = useMemo(() => {
    return searchParams.get('error') === ''
  }, [])

  return (
    <Container>
      <Card.Container>
        <Card.Header>
          <p className="title">
            welcome to the <span className="emphasis">Trivia Challenge!</span>
          </p>
        </Card.Header>
        <Card.Body>
          <p className="summary">
            You will be presented with 10 True or False questions. Can you score
            100%?
          </p>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => navigate('/challenge')}>BEGIN</Button>
        </Card.Footer>
      </Card.Container>
      {renderError && (
        <p className="error">Please check your internet connection.</p>
      )}
    </Container>
  )
}

export default Home
