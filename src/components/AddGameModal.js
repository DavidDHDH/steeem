import { useEffect, useState, useRef, useReducer } from 'react'

const initialState = { newTitle: '', newDescription: '', newImage: '' }
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, newTitle: action.payload }
    case 'SET_DESCRIPTION':
      return { ...state, newDescription: action.payload }
    case 'SET_IMAGE':
      return { ...state, newImage: action.payload }
    case 'CLEAR':
      return initialState
    default:
      throw new Error('Action non supportée')
  }
}

function AddGame({
  setGamesData,
  gamesData,
  isHidden,
  setIsHidden,
  setSearch,
}) {
  const titleInput = useRef()

  const [state, dispatch] = useReducer(reducer, initialState)
  const { newTitle, newDescription, newImage } = state
  const handleClick = () => setIsHidden(true)

  const handleChangeTitle = (e) => {
    dispatch({ type: 'SET_TITLE', payload: e.target.value })
  }
  const handleChangeDescription = (e) => {
    dispatch({ type: 'SET_DESCRIPTION', payload: e.target.value })
  }
  const handleChangeImage = (e) => {
    dispatch({ type: 'SET_IMAGE', payload: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const newGame = {
      id: Math.random(),
      thumbnail: newImage,
      title: newTitle,
      short_description: newDescription,
      gotIt: true,
    }
    dispatch({ type: 'CLEAR' })
    const games = [newGame, ...gamesData]
    setGamesData(games)
    setSearch('')
  }

  useEffect(() => {
    titleInput.current.focus()
  }, [])

  return (
    <div className="my-10" hidden={isHidden}>
      <div className="flex justify-end">
        <span onClick={handleClick} className="cursor-pointer mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </div>
      <h1 className="text-3xl mb-4 text-center max-xl:text-2xl max-lg:text-xl max-lg:my-4">
        Ajouter un jeu
      </h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center space-y-3"
      >
        <label className="flex flex-col">
          Titre
          <input
            onChange={handleChangeTitle}
            className="h-8 text-center w-60 max-lg:w-44"
            type="text"
            name="title"
            placeholder="max 30 caractères"
            value={newTitle}
            maxLength={30}
            ref={titleInput}
            required
          />
        </label>
        <label className="flex flex-col">
          Description
          <textarea
            onChange={handleChangeDescription}
            className="h-40 text-center w-60 p-1 max-lg:w-44"
            type="text"
            name="description"
            placeholder="max 150 caractères"
            value={newDescription}
            required
            maxLength={150}
          />
        </label>
        <label className="flex flex-col">
          Image
          <input
            onChange={handleChangeImage}
            className="h-8 text-center w-60 mb-2 max-lg:w-44"
            type="url"
            name="title"
            placeholder="http://..."
            value={newImage}
          />
        </label>
        <button
          type="submit"
          className="buttoninactive w-20 h-10 2xl:w-28 2xl:h-10"
        >
          Ajouter
        </button>
      </form>
    </div>
  )
}

export default AddGame
