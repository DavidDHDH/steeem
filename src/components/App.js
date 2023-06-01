import Header from '../components/Header'
import Body from '../components/Body'
import games from '../assets/data'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('')
  const [gamesData, setGamesData] = useState(games)

  return (
    <div className="container mx-auto">
      <Header
        search={search}
        setSearch={setSearch}
        setGamesData={setGamesData}
        gamesData={gamesData}
      />
      <Body
        search={search}
        setSearch={setSearch}
        gamesData={gamesData}
        setGamesData={setGamesData}
      />
    </div>
  )
}

export default App
