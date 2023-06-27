import { useEffect, useRef, useReducer, createContext } from 'react'

import users from '../assets/users.json'
import App from './App'
import { TextField, Box } from '@mui/material'

function authReducer(state, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload }
    case 'SET_PASSWORD':
      return { ...state, password: action.payload }
    case 'SET_REMEMBER':
      return { ...state, checkedRemember: action.payload }
    case 'SET_STAYCONNECTED':
      return { ...state, checkedStayConnected: action.payload }
    case 'SET_ERROR':
      return { ...state, username: '', password: '', error: action.error }
    case 'LOG_IN':
      return { ...state, loggedIn: action.payload }
    case 'LOG_OUT':
      return { ...state, loggedIn: false }
    case 'CLEAR':
      return initialAuthState
    default:
      return new Error('Action non supportée')
  }
}

const initialAuthState = {
  loggedIn: false,
  username: '',
  password: '',
  checkedRemember: false,
  checkedStayConnected: false,
  error: false,
}

export const LoggedContext = createContext()

function Authentification() {
  const inputName = useRef()
  const [state, dispatch] = useReducer(authReducer, initialAuthState)
  const {
    loggedIn,
    username,
    password,
    checkedRemember,
    checkedStayConnected,
    error,
  } = state

  const checkLoggedIn = () => {
    if (localStorage.getItem('loggedIn')) {
      dispatch({ type: 'LOG_IN', payload: true })
    }
  }
  const handleNameChange = (e) => {
    dispatch({ type: 'SET_USERNAME', payload: e.target.value })
  }
  const handlePasswordChange = (e) => {
    dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
  }
  const handleChangeRemember = (e) => {
    dispatch({ type: 'SET_REMEMBER', payload: e.target.checked })
  }
  const handleChangeStay = (e) => {
    dispatch({ type: 'SET_STAYCONNECTED', payload: e.target.checked })
    if (localStorage.getItem('loggedIn')) {
      localStorage.removeItem('loggedIn')
    }
  }
  const clearLocalStorage = (e) => {
    e.preventDefault()
    localStorage.removeItem('name')
    localStorage.removeItem('password')
    localStorage.removeItem('loggedIn')
    dispatch({ type: 'CLEAR' })
  }

  const checkID = (e) => {
    e.preventDefault()
    dispatch({ type: 'SET_ERROR', error: false })
    let found = false
    for (const user of users) {
      if (username === user.name && password === user.password) {
        found = true
        break
      }
    }
    if (found) {
      dispatch({ type: 'LOG_IN', payload: true })
      if (checkedRemember) {
        localStorage.setItem('name', username)
        localStorage.setItem('password', password)
        if (checkedStayConnected) {
          localStorage.setItem('loggedIn', true)
        }
      }
    } else {
      dispatch({ type: 'SET_ERROR', error: true })
    }
  }

  useEffect(() => {
    inputName.current.focus()
    checkLoggedIn()
    if (localStorage.getItem('name') && localStorage.getItem('password')) {
      dispatch({ type: 'SET_USERNAME', payload: localStorage.getItem('name') })
      dispatch({
        type: 'SET_PASSWORD',
        payload: localStorage.getItem('password'),
      })
      dispatch({ type: 'SET_REMEMBER', payload: true })
    }
    if (localStorage.getItem('loggedIn')) {
      dispatch({ type: 'SET_STAYCONNECTED', payload: true })
    }
  }, [])

  useEffect(() => {
    if (
      !loggedIn &&
      localStorage.getItem('name') &&
      localStorage.getItem('password')
    ) {
      dispatch({ type: 'SET_USERNAME', payload: localStorage.getItem('name') })
      dispatch({
        type: 'SET_PASSWORD',
        payload: localStorage.getItem('password'),
      })
    }
  }, [loggedIn])

  if (loggedIn) {
    return (
      <>
        <LoggedContext.Provider value={dispatch}>
          <App />
        </LoggedContext.Provider>
      </>
    )
  } else {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <form className="flex flex-col w-96 space-y-3">
          <TextField
            id="username"
            inputRef={inputName}
            onChange={handleNameChange}
            value={username}
            name="username"
            label="Identifiant"
            variant="outlined"
            helperText="David"
            required
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            onChange={handlePasswordChange}
            value={password}
            name="password"
            variant="outlined"
            helperText="1234"
            required
          />

          <button
            onClick={checkID}
            className="border border-green-600 text-white bg-green-600 p-2 rounded-md hover:bg-transparent hover:text-green-600 transition"
            type="submit"
          >
            Entrer
          </button>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="space-x-2">
                <input
                  id="remember"
                  type="checkbox"
                  checked={checkedRemember}
                  onChange={handleChangeRemember}
                />
                <label htmlFor="remember">Se souvenir de moi</label>
              </div>
              <div className=" space-x-2">
                <input
                  id="stayconnected"
                  type="checkbox"
                  checked={checkedStayConnected}
                  onChange={handleChangeStay}
                />
                <label htmlFor="stayconnected">Rester connecté</label>
              </div>
            </div>
            <button
              onClick={clearLocalStorage}
              className="border border-red-500 text-red-500 p-2 rounded-md hover:bg-red-500 hover:text-white transition"
            >
              Oubliez moi !
            </button>
          </div>
          <div className="text-center text-red-600 font-bold">
            {error ? 'Identification impossible' : null}
          </div>
        </form>
        <div className="mt-10">
          <p className="text-center text-gray-500">
            Données provenant de l'API{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.freetogame.com/"
            >
              https://www.freetogame.com/
            </a>{' '}
            <br />
            Notes et prix générés de manières aléatoires.
          </p>
        </div>
      </div>
    )
  }
}

export default Authentification
