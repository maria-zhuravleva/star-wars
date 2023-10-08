const baseUrl = 'https://swapi.dev/api/'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}starships/`)
  return res.json()
}

export async function getStarshipById(starshipId) {
  const res = await fetch(`${baseUrl}starships/${starshipId}/`)
  return res.json();
}

const pilotUrls = [
  "https://swapi.dev/api/people/13/", 
  "https://swapi.dev/api/people/14/", 
  "https://swapi.dev/api/people/25/", 
  "https://swapi.dev/api/people/31/",
]

export async function getPilots(urls) {
  const promises = urls.map(url => fetch(url).then(res => res.json()))
  const pilotObjects = await Promise.all(promises)
  return pilotObjects
}

getPilots(pilotUrls).then(pilots => console.log(pilots))