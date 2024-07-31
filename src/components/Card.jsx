import '../styles/Card.scss'

function Card({ title, cover }) {
  return (
    <div className="card">
      <div className="overlay"></div>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </div>
  )
}

export default Card
