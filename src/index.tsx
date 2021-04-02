import React from 'react'
import { render } from 'react-dom'
import './index.css'
import Dashboard from './views/Dashboard'

const App: React.FC = () => {
  return(
    <>
      <Dashboard />
    </>
  )
}

const rootHtml = document.getElementById('root')

render(<App />, rootHtml)