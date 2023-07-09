import { createContext, useReducer, useEffect } from 'react'
import users from '../datas/users.json'

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

export default function useConnect() {
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

  return {
    loggedIn,
    username,
    password,
    checkedRemember,
    checkedStayConnected,
    error,
    handleNameChange,
    handlePasswordChange,
    handleChangeRemember,
    handleChangeStay,
    clearLocalStorage,
    checkID,
    dispatch,
  }
}
