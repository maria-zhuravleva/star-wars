import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { getAllStarships } from "../services/sw-api"

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  if (!starshipList.length) return <h2>Loading...</h2>

  return (
    <main className="starship-list">
      {starshipList.map(starship =>
        <div className="link-container" key={starship.name}>
          <Link to={`/starships/${starship.name}`}>{starship.name}</Link>
        </div>
      )}
    </main>
  )
}

export default StarshipList