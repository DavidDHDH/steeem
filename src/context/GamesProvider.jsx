import { createContext, useEffect, useState } from 'react'
import ErrorDisplay from '../components/errorDisplay'
import { fetchGames } from '../datas/API'
import { useQuery } from '@tanstack/react-query'
import useSearch from '../hooks/useSearch'

export const GamesContext = createContext()

function GamesProvider(props) {
  const { search } = useSearch()
  const [filteredCatBy, setFilteredCatBy] = useState('')
  const [filteredPlatBy, setFilteredPlatBy] = useState('')

  const {
    isLoading,
    isSuccess,
    error,
    data: originalGames,
  } = useQuery(['games'], fetchGames, {
    staleTime: 55 * (60 * 1000),
    cacheTime: 60 * (60 * 1000),
  })

  const [gamesData, setGamesData] = useState(originalGames)

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

  useEffect(() => {
    setGamesData(filteredGames)
  }, [search, filteredCatBy, filteredPlatBy, originalGames])

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
