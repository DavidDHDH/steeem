// import { useEffect, useReducer } from 'react'

// export function fetchReducer(state, action) {
//   switch (action.type) {
//     case 'FETCHING':
//       return { status: 'fetching', data: [], error: null }
//     case 'DONE':
//       return { status: 'done', data: action.payload, error: null }
//     case 'FAIL':
//       return { status: 'fail', data: [], error: action.error }
//     default:
//       throw new Error('Action non supporté')
//   }
// }

// export default function useFetchData(url, options) {
//   const [state, dispatch] = useReducer(fetchReducer, {
//     status: 'idle',
//     data: [],
//     error: null,
//   })

//   useEffect(() => {
//     dispatch({ type: 'FETCHING' })
//     fetch(url, options)
//       .then((response) => {
//         if (response.ok) {
//           return response.json()
//         }
//         return Promise.reject(response)
//       })
//       .then((data) => {
//         dispatch({ type: 'DONE', payload: data })
//       })
//       .catch((error) => {
//         dispatch({ type: 'FAIL', error })
//       })
//   }, [options, url])
//   return state
// }
