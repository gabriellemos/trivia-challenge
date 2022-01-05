import React, { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import * as Card from 'components/Card'
import { Button } from 'components/Button'

const Home = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const renderError = useMemo(() => {
    return searchParams.get('error') === ''
  }, [])

  return (
    <main>
      <Card.Container>
        <Card.Header>
          <p>
            welcome to the <span className="emphasis">Trivia Challenge!</span>
          </p>
        </Card.Header>
        <Card.Body>
          <p>
            You will be presented with 10 True or False questions. Can you score
            100%?
          </p>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => navigate('/challenge')}>BEGIN</Button>
        </Card.Footer>
      </Card.Container>
      {/* {renderError && <p>Error</p>} */}
    </main>
  )
}

export default Home
