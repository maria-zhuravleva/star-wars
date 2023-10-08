import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { getStarshipById } from "../services/sw-api"

const StarshipPage = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()
  
  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarshipById(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [starshipId])

  if (!starshipDetails.name) return <h2>Loading...</h2>

  return (
    <main className="starship-details">
      <h3>NAME: {starshipDetails.name}</h3>
      <h3>MODEL: {starshipDetails.model}</h3>
      <h3>
      <Link to={`/starships`}>RETURN</Link>
      </h3>
    </main>
  )
}

export default StarshipPage