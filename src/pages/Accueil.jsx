import Banner from '../components/Banner'
import { useState, useEffect } from 'react'
import { getLogements } from '../services/logementsService'
import Card from '../components/Card'
import '../styles/Home.scss'

function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    const getAllLogements = async () => {
      const data = await getLogements()
      setLogements(data)
    }
    getAllLogements()
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
