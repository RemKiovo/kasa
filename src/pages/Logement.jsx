import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchLogements } from '../services/logementsService'
import Slideshow from '../components/Slideshow'
import '../styles/Logement.scss'

function Logement() {
  const { logementId } = useParams()
  const [logement, setLogement] = useState(null)

  useEffect(() => {
    fetchLogements()
      .then((logements) => {
        const foundLogement = logements.find(
          (logement) => logement.id === logementId
        )
        setLogement(foundLogement)
      })
      .catch((error) => {
        console.error('Failed to fetch logements:', error)
      })
  }, [logementId])

  return logement ? (
    <div>
      <div id="slideshow-container">
        <Slideshow pictures={logement.pictures} />
      </div>
    </div>
  ) : null
}

export default Logement
