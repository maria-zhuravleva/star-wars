import { useEffect, useState } from "react"
import { getPilots } from "../services/sw-api"

const PilotList = ({ pilotUrls }) => {
  const [pilotList, setPilotList] = useState([])

  useEffect(() => {
    const fetchPilotList = async () => {
      const pilotData = await getPilots(pilotUrls)
      setPilotList(pilotData)
    }
    fetchPilotList()
  }, [pilotUrls])

  if (!pilotList.length) return 'No Pilots'

  return (  
    <main className="pilot-list">
      {pilotList.map(pilot =>
      <div key={pilot.name}>{pilot.name}</div>
    )}
  </main>
  )
}

export default PilotList