import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Container } from '@mui/material'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Container disableGutters>
      <App />
    </Container>
  </React.StrictMode>,
)
