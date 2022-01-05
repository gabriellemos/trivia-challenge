import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Challenge from 'pages/Challenge'
import Results from 'pages/Results'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
