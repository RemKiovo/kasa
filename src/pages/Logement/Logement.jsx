import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getLogements } from '../../services/logementsService'
import Banner from '../../components/Banner/Banner'
import './Logement.scss'
import { showToast } from '../../components/Toaster/Toaster'

function Logement() {
  const { logementId } = useParams()
  const [logement, setLogement] = useState(null)

  useEffect(() => {
    getLogements()
      .then((logements) => {
        const foundLogement = logements.find(
          (logement) => logement.id === logementId
        )
        setLogement(foundLogement)
      })
      .catch((error) => {
        console.error(error)
        showToast('Une erreur est survenue', 'error')
      })
  }, [logementId])

  useEffect(() => {
    document.title = logement ? logement.title : 'Logement introuvable'
  }, [logement])

  return logement ? (
    <main>
      <Banner page="logement" logement={logement}></Banner>
      <article>
        <section>
          <p>{logement.description}</p>
          <h2>{logement.host.name}</h2>
          <img src={logement.host.picture} alt={logement.host.name} />
          <p>{logement.rating} / 5 étoiles</p>
          <h3>{logement.location}</h3>
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={`${equipment}+${index}`}>{equipment}</li>
            ))}
          </ul>
          <ul
            style={{
              paddingTop: '10px',
            }}
          >
            {logement.tags.map((tag, index) => (
              <li key={`${tag}+${index}`}>{tag}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  ) : null
}

export default Logement
