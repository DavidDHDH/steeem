const fetchAPI = (url, options) => {
  fetch(url, options)
    .then((r) => r.json())
    .then((json) => json)
}

export default fetchAPI
