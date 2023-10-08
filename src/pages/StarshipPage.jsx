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
      <div className="starship-details-card">
        <h4>NAME: {starshipDetails.name}</h4>
        <h4>MODEL: {starshipDetails.model}</h4>
        <h4>
        <Link to={`/starships`} style={{ color: "white"}}>
          RETURN
        </Link>
        </h4>
      </div>
    </main>
  )
}

export default StarshipPage