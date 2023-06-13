import Header from '../components/Header'
import Body from '../components/Body'
import { useEffect, useState, useReducer } from 'react'
import { optionsAllGames, urlAllGames } from './API'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const newJson = (games) => {
  for (let game of games) {
    game.price = getRandomIntInclusive(1, 69)
    game.gotIt = false
    game.note = getRandomIntInclusive(0, 20)
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'fetching':
      return { status: 'fetching', data: null, error: null }
    case 'done':
      return { status: 'done', data: action.payload, error: null }
    case 'fail':
      return { status: 'fail', data: null, error: action.error }
    default:
      throw new Error('Action non supporté')
  }
}

function App({ setLoggedIn }) {
  const [search, setSearch] = useState('')
  const [gamesData, setGamesData] = useState([])
  const [state, dispatch] = useReducer(reducer, {
    status: 'idle',
    data: null,
    error: null,
  })
  const { status, data, error } = state

  const logOut = () => {
    setLoggedIn(false)
  }

  useEffect(() => {
    dispatch({ type: 'fetching' })
    fetch(urlAllGames, optionsAllGames)
      .then((r) => r.json())
      .then((json) => {
        newJson(json)
        dispatch({ type: 'done' })
        setGamesData(json)
      })
      .catch((error) => dispatch({ type: 'fail', payload: error }))
  }, [])

  if (error) {
    throw error
  }

  return (
    <div className="container mx-auto">
      <button
        onClick={logOut}
        className="absolute top-4 right-4 border border-red-600 text-red-600 p-2 rounded-md hover:bg-red-600 hover:text-white"
      >
        Se déconnecter
      </button>
      <div className=" mt-32">
        <Header search={search} setSearch={setSearch} />
        <Body
          search={search}
          setSearch={setSearch}
          gamesData={gamesData}
          setGamesData={setGamesData}
          status={status}
        />
      </div>
    </div>
  )
}

export default App
