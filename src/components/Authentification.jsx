import { useRef, useEffect } from 'react'
import { TextField } from '@mui/material'
import useConnect from '../hooks/useConnect'

function Authentification({ handleLog }) {
  const inputName = useRef()

  const {
    loggedIn,
    username,
    password,
    checkedRemember,
    checkedStayConnected,
    error,
    handleNameChange,
    handlePasswordChange,
    handleChangeRemember,
    handleChangeStay,
    clearLocalStorage,
    checkID,
  } = useConnect()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleLog(loggedIn), [loggedIn])

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl my-5">Se connecter</h1>
      <form className="flex flex-col w-96 space-y-3">
        <TextField
          id="username"
          inputRef={inputName}
          onChange={handleNameChange}
          value={username}
          name="username"
          label="Identifiant"
          variant="outlined"
          helperText="David"
          required
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          onChange={handlePasswordChange}
          value={password}
          name="password"
          variant="outlined"
          helperText="1234"
          required
        />
        <button
          onClick={checkID}
          className="border border-green-600 text-white bg-green-600 p-2 rounded-md hover:bg-transparent hover:text-green-600 transition"
          type="submit"
        >
          Entrer
        </button>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="space-x-2">
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
                disabled
              />
              <label htmlFor="stayconnected">Rester connecté</label>
            </div>
          </div>
          <button
            onClick={clearLocalStorage}
            className="border border-red-500 text-red-500 p-2 rounded-md hover:bg-red-500 hover:text-white transition"
          >
            Oubliez moi !
          </button>
        </div>
        <div className="text-center text-red-600 font-bold">
          {error ? 'Identification impossible' : null}
        </div>
      </form>
      <div className="mt-10">
        <p className="text-center text-gray-500">
          Données provenant de l'API{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.freetogame.com/"
          >
            https://www.freetogame.com/
          </a>{' '}
          <br />
          Notes et prix générés de manières aléatoires.
        </p>
      </div>
    </div>
  )
}

export default Authentification
