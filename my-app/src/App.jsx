import './App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail.jsx'
import First from './pages/First.jsx'
import Error from './pages/Error.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<First />} />
      <Route path='/:id' element={<Detail />} />
      <Route path='*' element={<Error />} />
    </Routes >
  )
}
export default App
