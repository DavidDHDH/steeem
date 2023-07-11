import { createContext, useEffect, useState } from 'react'
import ErrorDisplay from '../components/errorDisplay'
import { fakeGames, fetchGames } from '../datas/API'
import { useQuery } from '@tanstack/react-query'
import useSearch from '../hooks/useSearch'

export const GamesContext = createContext()

function GamesProvider(props) {
  const [search] = useSearch()
  const [filteredCatBy, setFilteredCatBy] = useState('')
  const [filteredPlatBy, setFilteredPlatBy] = useState('')

  const {
    isLoading,
    isSuccess,
    error,
    data: originalGames,
  } = useQuery(['games'], fetchGames)

  const [gamesData, setGamesData] = useState(originalGames)

  useEffect(() => {
    setGamesData(filteredGames)
  }, [search, filteredCatBy, filteredPlatBy, originalGames])

  const gamesCategories = originalGames
    ? [...new Set(originalGames.map((game) => game.genre))]
    : []
  const gamesPlatforms = originalGames
    ? [...new Set(originalGames.map((game) => game.platform))]
    : []

  const filteredGames = originalGames
    ? originalGames.filter((game) => {
        return (
          game.title.toLowerCase().includes(search.toLowerCase()) &&
          game.genre.includes(filteredCatBy) &&
          game.platform.includes(filteredPlatBy)
        )
      })
    : []

  if (error) {
    return <ErrorDisplay error={error} />
  }

  const value = {
    isLoading,
    isSuccess,
    gamesData,
    setGamesData,
    gamesCategories,
    filteredCatBy,
    setFilteredCatBy,
    gamesPlatforms,
    filteredPlatBy,
    setFilteredPlatBy,
  }

  return <GamesContext.Provider value={value} {...props} />
}

export default GamesProvider