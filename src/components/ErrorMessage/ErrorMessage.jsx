import { Link } from 'react-router-dom'
import './ErrorMessage.scss'

const ErrorMessage = ({ page }) => {
  return (
    <section className="error">
      <h1>404</h1>
      {page === 'Error' ? (
        <p>Oups! La page que vous demandez n'existe pas.</p>
      ) : (
        <p>Oups! Le logement que vous recherchez n'existe pas.</p>
      )}
      <Link to="/">Retour sur la page d'accueil</Link>
    </section>
  )
}

export default ErrorMessage
