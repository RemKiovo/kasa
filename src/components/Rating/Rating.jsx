import './Rating.scss'

function Rating({ rating }) {
  return (
    <ul className="rating">
      {[...Array(5)].map((_, index) => {
        const isFull = index < rating
        return (
          <li key={index} className="rating__item">
            <i
              className={`fa-solid fa-star ${
                isFull ? 'rating__item--full' : ''
              }`}
            ></i>
          </li>
        )
      })}
    </ul>
  )
}

export default Rating
