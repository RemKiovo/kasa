import Banner from '../components/Banner'
import Card from '../components/Card'
import '../styles/Home.scss'

const logements = require('../data/logements.json')
console.log('Total logements:', logements.length)

function Home() {
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
            />
          )
        })}
      </div>
    </main>
  )
}

export default Home
