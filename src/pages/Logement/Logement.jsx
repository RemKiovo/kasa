import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getLogemementByID } from '../../services/getLogementById'
import Banner from '../../components/Banner/Banner'
import './Logement.scss'
import { showToast } from '../../components/Toaster/Toaster'
import Collapse from '../../components/Collapse/Collapse'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

function Logement() {
  const { logementId } = useParams()
  const [logement, setLogement] = useState()

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
          10000
        )
        setLogement(null)
      })
  }, [logementId])

  useEffect(() => {
    document.title = logement
      ? 'Kasa | ' + logement.title
      : !logement
      ? 'Kasa | Logement'
      : 'Erreur 404'
  }, [logement])

  const { title, location, tags, host, rating, description, equipments } =
    logement || {}

  return logement ? (
    <main>
      <Banner page="logement" logement={logement}></Banner>
      <article className="logement-info">
        <header>
          <h1 className="logement-info__title">{title}</h1>
          <p className="logement-info__location">{location}</p>
          <ul className="logement-info__tags">
            {tags.map((tag, index) => (
              <li key={`${tag}-${index}`}>{tag}</li>
            ))}
          </ul>
        </header>
        <section className="logement-info__host">
          <figure>
            <img src={host.picture} alt={`${host.name}`} />
            <figcaption>
              <p>{host.name}</p>
            </figcaption>
          </figure>
          <ul className="rating">
            {[...Array(5)].map((_, index) => {
              const isFull = index < rating
              return (
                <li key={index} className="rating__item">
                  <i
                    className={`fa-solid fa-star ${
                      isFull ? `star-${index + 1}` : ''
                    }`}
                  ></i>
                </li>
              )
            })}
          </ul>
        </section>
      </article>
      <section className="logement-info__collapse">
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {equipments.map((equipements, index) => (
              <li key={`${equipements}-${index}`}>{equipements}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  ) : logement === null ? (
    <main className="error__container">
      <ErrorMessage />
    </main>
  ) : null
}

export default Logement
