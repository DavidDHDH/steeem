import React, { useState } from 'react'
import '../styles/index.css'

function FilterBtn({ name }) {
  let [state, setActive] = useState('buttoninactive')
  function onClick(e) {
    e.preventDefault()
    state === 'buttoninactive'
      ? setActive('buttonactive')
      : setActive('buttoninactive')
  }

  return (
    <div>
      <button onClick={onClick} className={state}>
        {name}
      </button>
    </div>
  )
}

export default FilterBtn
