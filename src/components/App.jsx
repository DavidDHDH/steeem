import Header from './search-part/Header'
import Body from './Body'

import Authentification from './Authentification'
import GamesProvider from '../context/GamesProvider'
import SearchProvider from '../context/SearchProvider'
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const handleLog = (log) => {
    setLoggedIn(log)
  }
  if (loggedIn) {
    return (
      <div className="container mx-auto">
        <GamesProvider>
          <SearchProvider>
            <div className=" mt-32">
              <Header handleLog={handleLog} />
              <Body />
            </div>
          </SearchProvider>
        </GamesProvider>
      </div>
    )
  } else {
    return <Authentification handleLog={handleLog} />
  }
}

export default App
