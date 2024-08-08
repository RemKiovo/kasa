import Banner from '../../components/Banner/Banner'
import { useState, useEffect } from 'react'
import { getLogements } from '../../services/getLogements'
import Card from '../../components/Card/Card'
import './Accueil.scss'
import { showToast } from '../../components/Toaster/Toaster'

function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    getLogements()
      .then((logements) => {
        setLogements(logements)
      })
      .catch((error) => {
        console.error(error)
        showToast(
          'Désolé, mais une erreur est survenue. Essayez de rafraîchir la page.',
          'error'
        )
      })
    document.title = 'Kasa | Accueil'
  }, [])

  return (
    <main id="home">
      <Banner page="home">
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <section id="card-container">
        {logements.map((logement) => {
          const { id, title, cover } = logement
          return <Card key={id} title={title} cover={cover} id={id} />
        })}
      </section>
    </main>
  )
}

export default Home
