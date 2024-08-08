import { Link } from 'react-router-dom'
import './Card.scss'

function Card({ title, cover, id }) {
  return (
    <Link to={`/logement/${id}`} className="card-link">
      <article className="card">
        <div className="overlay" aria-hidden></div>
        <figure>
          <img src={cover} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </article>
    </Link>
  )
}

export default Card
