// API
import axios from 'axios'

export const gameApi = {
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  options: {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '894e1bfc3bmsh75229056e85c892p19174ejsnc0d08be616d8',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
  },
}

export const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': '894e1bfc3bmsh75229056e85c892p19174ejsnc0d08be616d8',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
}

export const fetchGames = async () => {
  const response = await axios.request(options)
  return response.data
}
