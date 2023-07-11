import Header from './search-header/Header'
import Body from './Body'
import Authentification from './Authentification'
import GamesProvider from '../context/GamesProvider'
import SearchProvider from '../context/SearchProvider'
import { useState } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const handleLog = (log) => {
    setLoggedIn(log)
  }
  if (loggedIn) {
    return (
      <div className="container mx-auto">
        <SearchProvider>
          <GamesProvider>
            <div className=" mt-32">
              <Header handleLog={handleLog} />
              <Body />
            </div>
          </GamesProvider>
        </SearchProvider>

        <ReactQueryDevtools />
      </div>
    )
  } else {
    return <Authentification handleLog={handleLog} />
  }
}

export default App
