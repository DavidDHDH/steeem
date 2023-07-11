import { useReducer, useEffect, createContext, useState } from 'react'
import { gameApi } from '../datas/API'
import ErrorDisplay from '../components/errorDisplay'
import { fetchGames } from '../datas/API'
import { useQuery } from '@tanstack/react-query'

export const GamesContext = createContext()

function getRandomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export const addValuesToJson = (games) => {
  for (let game of games) {
    game.price = getRandomNumber(1, 69)
    game.gotIt = false
    game.note = getRandomNumber(0, 20)
  }
}

function GamesProvider(props) {
  const [filteredCatBy, setFilteredCatBy] = useState('')
  const [filteredPlatBy, setFilteredPlatBy] = useState('')
  // const setGamesData = (games) => dispatch({ type: 'ADD_DATA', payload: games })

  const {
    isLoading,
    isSuccess,
    error,
    data: gamesData,
  } = useQuery(['games'], fetchGames)

  if (error) {
    return <ErrorDisplay error={error} />
  }

  const value = {
    isLoading,
    isSuccess,
    gamesData,
    filteredCatBy,
    setFilteredCatBy,
    filteredPlatBy,
    setFilteredPlatBy,
  }

  return <GamesContext.Provider value={value} {...props} />
}

export default GamesProvider
