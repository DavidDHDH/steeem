import Header from '../components/Header'
import Body from '../components/Body'
import { useEffect, useState, useReducer, useContext } from 'react'
import { optionsAllGames, urlAllGames } from './API'
import { LoggedContext } from './Authentification'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const addValuesToJson = (games) => {
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

function App() {
  const [search, setSearch] = useState('')
  const [state, dispatch] = useReducer(reducer, {
    status: 'idle',
    data: [],
    error: null,
  })
  const { status, data, error } = state
  const authDispatch = useContext(LoggedContext)

  const logOut = () => {
    authDispatch({ type: 'LOG_OUT' })
  }

  useEffect(() => {
    dispatch({ type: 'FETCHING' })
    fetch(urlAllGames, optionsAllGames)
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

  const setGamesData = (game) => dispatch({ type: 'ADD_DATA', payload: game })

  if (error) {
    throw new Error('Il y a un problème ' + error.status)
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
          gamesData={data}
          setGamesData={setGamesData}
          status={status}
        />
      </div>
    </div>
  )
}

export default App
