import '../styles/Slideshow.scss'
import { useState } from 'react'

function Slideshow({ pictures }) {
  const [imageIndex, setImageIndex] = useState(0)

  function showPreviousImg() {
    setImageIndex((index) => {
      if (index === 0) {
        return pictures.length - 1
      }
      return index - 1
    })
  }

  function showNextImg() {
    setImageIndex((index) => {
      if (index === pictures.length - 1) {
        return 0
      }
      return index + 1
    })
  }

  return (
    <div id="slider">
      <div className="img-container">
        {pictures.map((url) => (
          <img
            key={url}
            src={url}
            alt=""
            className="slider-img"
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
          />
        ))}
      </div>
      <button className="slider-btn slider-btn-left" onClick={showPreviousImg}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="slider-btn slider-btn-right" onClick={showNextImg}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className="slider-dots-container">
        {pictures.map((_, index) => (
          <button
            key={index}
            onClick={() => setImageIndex(index)}
            className="slider-dots"
          >
            {index === imageIndex ? (
              <i className="fas fa-circle"></i>
            ) : (
              <i className="far fa-circle"></i>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Slideshow
