const getIDFromUrl = (url) => {
    const matches = url.match(/https:\/\/pokeapi\.co\/api\/v\d+\/[\w-]+\/(\d+)\/?/)
    return matches ? (parseInt(matches[1]) || 0) : 0
  }
  
  export default getIDFromUrl