import Banner from '../components/Banner'
import { useState, useEffect } from 'react'
import { fetchLogements } from '../services/logementsService'
import Card from '../components/Card'
import '../styles/Home.scss'

function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    const getLogements = async () => {
      const data = await fetchLogements()
      setLogements(data)
    }
    getLogements()
  }, [])

  return (
    <main id="home">
      <Banner page="home">
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div id="card-container">
        {logements.map((logement, index) => {
          console.log(`Rendering logement ${index + 1}:`, logement)
          return (
            <Card
              key={logement.id}
              title={logement.title}
              cover={logement.cover}
              id={logement.id}
            />
          )
        })}
      </div>
    </main>
  )
}

export default Home
