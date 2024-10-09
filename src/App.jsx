import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './globals.css'
import Home from './_root/pages/Home'

function App() {
  return (
    <main className='flex h-screen'>
      <Routes>
        <Route path='/sign-in' element={<SigninForm />} />

        <Route index element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
