async function fetchAPI(url, options) {
  try {
    const response = await fetch(url, options)
    const result = await response.json()
    console.log(result)
    return result
  } catch (error) {
    console.error(error)
  }
}

export default fetchAPI
