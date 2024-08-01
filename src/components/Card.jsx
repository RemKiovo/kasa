import { Link } from 'react-router-dom'
import '../styles/Card.scss'

function Card({ title, cover, id }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <div className="overlay"></div>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </Link>
  )
}

export default Card
