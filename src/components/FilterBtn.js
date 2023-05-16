import React, { useState } from 'react'
import '../styles/index.css'

function FilterBtn({ name, filter, setFilter }) {
  const [state, setActive] = useState('buttoninactive')

  function handleClick(e) {
    e.preventDefault()
    const active = () => {
      setActive('buttonactive')
    }
    const desactive = () => {
      setActive('buttoninactive')
    }

    state === 'buttoninactive' ? active() : desactive()
  }

  return (
    <div>
      <button onClick={handleClick} className={state} value={name}>
        {name}
      </button>
    </div>
  )
}

export default FilterBtn
