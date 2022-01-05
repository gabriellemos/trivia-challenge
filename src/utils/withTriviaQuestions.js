import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import * as TriviaService from 'services/Trivia'

const withTriviaQuestions = (Component) => {
  return (props) => {
    const [questions, setQuestions] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      TriviaService.get()
        .then(({ data }) => {
          setQuestions(data.results)
        })
        .catch(() => {
          navigate('/?error')
        })
    }, [])

    return <Component questions={questions} {...props} />
  }
}

export default withTriviaQuestions
