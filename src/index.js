import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { ErrorBoundary } from 'react-error-boundary'
import Authentification from './components/Authentification'
import ErrorDisplay from './components/errorDisplay'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <ErrorBoundary key={Math.random()} FallbackComponent={ErrorDisplay}>
    <Authentification />
  </ErrorBoundary>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
