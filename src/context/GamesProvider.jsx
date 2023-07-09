import { useReducer, useEffect, createContext, useState } from 'react'
import { gameApi } from '../datas/API'
import ErrorDisplay from '../components/errorDisplay'

export const GamesContext = createContext()

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export const addValuesToJson = (games) => {
  for (let game of games) {
    game.price = getRandomIntInclusive(1, 69)
    game.gotIt = false
    game.note = getRandomIntInclusive(0, 20)
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCHING':
      return { status: 'fetching', data: [], error: null }
    case 'DONE':
      return { status: 'done', data: action.payload, error: null }
    case 'ADD_DATA':
      return { status: 'updated', data: action.payload, error: null }
    case 'FAIL':
      return { status: 'fail', data: [], error: action.error }
    default:
      throw new Error('Action non supporté')
  }
}

function GamesProvider(props) {
  const [state, dispatch] = useReducer(reducer, {
    status: 'idle',
    data: [],
    error: null,
  })
  const { status, data: gamesData, error } = state
  const [filteredCatBy, setFilteredCatBy] = useState('')
  const [filteredPlatBy, setFilteredPlatBy] = useState('')
  const setGamesData = (games) => dispatch({ type: 'ADD_DATA', payload: games })

  useEffect(() => {
    dispatch({ type: 'FETCHING' })
    fetch(gameApi.url, gameApi.options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(response)
      })
      .then((data) => {
        addValuesToJson(data)
        dispatch({ type: 'DONE', payload: data })
      })
      .catch((error) => {
        dispatch({ type: 'FAIL', error })
      })
  }, [])

  if (error) {
    return <ErrorDisplay error={error} />
  }

  const value = [
    status,
    gamesData,
    setGamesData,
    filteredCatBy,
    setFilteredCatBy,
    filteredPlatBy,
    setFilteredPlatBy,
  ]

  return <GamesContext.Provider value={value} {...props} />
}

export default GamesProvider
