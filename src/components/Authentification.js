import { useEffect, useRef, useState, useReducer, createContext } from 'react'
import users from '../assets/users.json'
import App from './App'

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
      return { ...state, error: action.error }
    case 'LOG_IN':
      return { ...state, loggedIn: action.payload }
    default:
      return new Error('Action non supporté')
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
  const handleChangeRemember = () => {
    dispatch({ type: 'SET_REMEMBER', payload: !checkedRemember })
  }
  const handleChangeStay = () => {
    dispatch({ type: 'SET_STAYCONNECTED', payload: !checkedStayConnected })
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
      dispatch({ type: 'SET_USERNAME', payload: '' })
      dispatch({ type: 'SET_PASSWORD', payload: '' })
    }
  }
  const clearLocalStorage = (e) => {
    e.preventDefault()
    localStorage.removeItem('name')
    localStorage.removeItem('password')
    localStorage.removeItem('loggedIn')
    dispatch({ type: 'SET_USERNAME', payload: '' })
    dispatch({ type: 'SET_PASSWORD', payload: '' })
    dispatch({ type: 'SET_REMEMBER', payload: false })
    dispatch({ type: 'SET_STAYCONNECTED', payload: false })
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
  }, [])

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
      <div className="flex justify-center items-center h-screen">
        <form className="flex flex-col w-96 space-y-3">
          <label className="font-bold" forhtml="username">
            Identifiant
          </label>
          <input
            id="username"
            ref={inputName}
            type="text"
            onChange={handleNameChange}
            value={username}
            name="name"
            placeholder="David"
          />
          <label className="font-bold" forhtml="password">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            onChange={handlePasswordChange}
            value={password}
            name="password"
            placeholder="1234"
          />
          <button
            onClick={checkID}
            className="border border-green-600 text-white bg-green-600 p-2 rounded-md hover:bg-transparent hover:text-green-600"
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
              className="border border-red-500 text-red-500 p-2 rounded-md hover:bg-red-500 hover:text-white"
            >
              Oubliez moi !
            </button>
          </div>
          <div className="text-center text-red-600 font-bold">
            {error ? 'Identification impossible' : null}
          </div>
        </form>
      </div>
    )
  }
}

export default Authentification
