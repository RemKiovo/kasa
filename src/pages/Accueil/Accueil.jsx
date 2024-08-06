import Banner from '../../components/Banner/Banner'
import { useState, useEffect } from 'react'
import { getLogements } from '../../services/logementsService'
import Card from '../../components/Card/Card'
import './Accueil.scss'
import { showToast } from '../../components/Toaster/Toaster'

function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    getLogements()
      .then((logements) => {
        setLogements(logements)
        showToast(`${logements.length} logements récupérer`, 'info', 2000)
      })
      .catch((error) => {
        console.error(error)
        showToast(
          'Désolé, mais une erreur est survenue. Essayez de rafraîchir la page.',
          'error'
        )
      })
  }, [])

  return (
    <main id="home">
      <Banner page="home">
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <section id="card-container">
        {logements.map((logement) => {
          return (
            <Card
              key={logement.id}
              title={logement.title}
              cover={logement.cover}
              id={logement.id}
            />
          )
        })}
      </section>
    </main>
  )
}

export default Home
