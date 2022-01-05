import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [searchParams] = useSearchParams()

  const renderError = useMemo(() => {
    return searchParams.get('error') === ''
  }, [])

  return (
    <main>
      <h1>Welcome to the Trivia Challenge!</h1>
      {renderError && <p>Error</p>}
    </main>
  )
}

export default Home
