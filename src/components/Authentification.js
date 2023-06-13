import { createContext, useEffect, useRef, useState } from 'react'
import users from '../assets/users.json'
import App from './App'

function Authentification() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [checkedRemember, setCheckedRemember] = useState(false)
  const [checkedStayConnected, setCheckedStayConnected] = useState(false)
  const inputName = useRef()

  const checkLoggedIn = () => {
    if (localStorage.getItem('loggedIn')) {
      setLoggedIn(true)
    }
  }
  const handleNameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const checkID = (e) => {
    e.preventDefault()
    setError(false)
    let found = false
    for (const user of users) {
      if (username === user.name && password === user.password) {
        found = true
        break
      }
    }
    if (found) {
      setLoggedIn(true)
      if (checkedRemember) {
        localStorage.setItem('name', username)
        localStorage.setItem('password', password)
        if (checkedStayConnected) {
          localStorage.setItem('loggedIn', true)
        }
      }
    } else {
      setError(true)
      setUsername('')
      setPassword('')
    }
  }
  const clearLocalStorage = (e) => {
    e.preventDefault()
    localStorage.removeItem('name')
    localStorage.removeItem('password')
    localStorage.removeItem('loggedIn')
    setUsername('')
    setPassword('')
    setCheckedRemember(false)
    setCheckedStayConnected(false)
  }
  const handleChangeRemember = () => {
    setCheckedRemember(!checkedRemember)
  }
  const handleChangeStay = () => {
    setCheckedStayConnected(!checkedStayConnected)
  }

  useEffect(() => {
    inputName.current.focus()
    checkLoggedIn()
    if (localStorage.getItem('name') && localStorage.getItem('password')) {
      setUsername(localStorage.getItem('name'))
      setPassword(localStorage.getItem('password'))
      setCheckedRemember(true)
    }
  }, [])

  if (loggedIn) {
    return (
      <>
        <App setLoggedIn={setLoggedIn} />
      </>
    )
  } else {
    return (
      <div className="flex justify-center items-center h-screen">
        <form className="flex flex-col w-96 space-y-3">
          <label forhtml="username">Identifiant</label>
          <input
            id="username"
            ref={inputName}
            type="text"
            onChange={handleNameChange}
            value={username}
            name="name"
            placeholder="David"
          />
          <label forhtml="password">Mot de passe</label>
          <input
            id="password"
            type="password"
            onChange={handlePasswordChange}
            value={password}
            name="password"
            placeholder="1234"
          />
          <button
            onClick={checkID}
            className="border border-black"
            type="submit"
          >
            Entrer
          </button>
          <div className="flex justify-around">
            <div className="flex flex-col">
              <div className=" space-x-2">
                <input
                  id="remember"
                  type="checkbox"
                  checked={checkedRemember}
                  onChange={handleChangeRemember}
                />
                <label htmlFor="remember">Se souvenir de moi</label>
              </div>
              <div className=" space-x-2">
                <input
                  id="stayconnected"
                  type="checkbox"
                  checked={checkedStayConnected}
                  onChange={handleChangeStay}
                />
                <label htmlFor="stayconnected">Rester connecté</label>
              </div>
            </div>
            <button
              onClick={clearLocalStorage}
              className="border border-black px-2"
            >
              Oubliez moi !
            </button>
          </div>
          <div className="text-center text-red-600 font-bold">
            {error ? 'Identification impossible' : null}
          </div>
        </form>
      </div>
    )
  }
}

export default Authentification
