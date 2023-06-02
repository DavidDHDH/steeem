import Header from '../components/Header'
import Body from '../components/Body'
import games from '../assets/data'
import { useEffect, useState } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const [gamesData, setGamesData] = useState([])

  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '894e1bfc3bmsh75229056e85c892p19174ejsnc0d08be616d8',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
  }
  useEffect(() => {
    fetch(url, options)
      .then((r) => r.json())
      .then((json) => setGamesData(json))
  }, [])

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
