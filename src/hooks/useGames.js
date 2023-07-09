import { useContext } from 'react'
import { GamesContext } from '../context/GamesProvider'

function useGames() {
  const context = useContext(GamesContext)
  if (!context) {
    throw new Error('useGames doit etre utilisé dans le GamesProvider')
  }
  return context
}

export default useGames
