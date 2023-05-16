import Header from '../components/Header'
import Body from '../components/Body'
import games from '../assets/data'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([{ jai: false, jaipas: false }])
  const [gamesData, setGamesData] = useState(games)
  return (
    <div className="container mx-auto">
      <Header
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        setGamesData={setGamesData}
        gamesData={gamesData}
      />
      <Body
        search={search}
        setSearch={setSearch}
        gamesData={gamesData}
        setGamesData={setGamesData}
        filter={filter}
      />
    </div>
  )
}

export default App
