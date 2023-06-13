import Header from '../components/Header'
import Body from '../components/Body'
import { useContext } from 'react'
import { LoggedContext } from './Authentification'
import GamesProvider from './GamesProvider'
import SearchProvider from './SearchProvider'

function App() {
  const authDispatch = useContext(LoggedContext)
  const logOut = () => {
    authDispatch({ type: 'LOG_OUT' })
  }

  return (
    <div className="container mx-auto">
      <button
        onClick={logOut}
        className="absolute top-4 right-4 border border-red-600 text-red-600 p-2 rounded-md hover:bg-red-600 hover:text-white transition"
      >
        Se déconnecter
      </button>
      <GamesProvider>
        <SearchProvider>
          <div className=" mt-32">
            <Header />
            <Body />
          </div>
        </SearchProvider>
      </GamesProvider>
    </div>
  )
}

export default App
