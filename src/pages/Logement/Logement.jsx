import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getLogemementByID } from '../../services/getLogementById'
import Banner from '../../components/Banner/Banner'
import './Logement.scss'
import { showToast } from '../../components/Toaster/Toaster'
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating'

function Logement() {
  const { logementId } = useParams()
  const [logement, setLogement] = useState(null)

  useEffect(() => {
    getLogemementByID(logementId)
      .then((logement) => {
        setLogement(logement)
      })
      .catch((error) => {
        console.error(error)
        showToast(
          'Désolé, mais une erreur est survenue. Essayez de rafraîchir la page.',
          'error',
          50000
        )
      })
  }, [logementId])

  useEffect(() => {
    document.title = logement ? logement.title : 'Logement introuvable'
  }, [logement])

  return logement ? (
    <main>
      <Banner page="logement" logement={logement}></Banner>
      <article className="logement-info">
        <header>
          <h1 className="logement-info__title">{logement.title}</h1>
          <p className="logement-info__location">{logement.location}</p>
          <ul className="logement-info__tags">
            {logement.tags.map((tag, index) => (
              <li key={`${tag}-${index}`}>{tag}</li>
            ))}
          </ul>
        </header>
        <section className="logement-info__host">
          <figure>
            <img src={logement.host.picture} alt={`${logement.host.name}`} />
            <figcaption>
              <p>{logement.host.name}</p>
            </figcaption>
          </figure>
          <Rating rating={logement.rating} />
        </section>
      </article>
      <section className="logement-info__collapse">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipements, index) => (
              <li key={`${equipements}-${index}`}>{equipements}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  ) : null
}

export default Logement
