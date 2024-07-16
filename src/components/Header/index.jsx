import { Link } from 'react-router-dom';
import './style.scss';
import imgUrl from '../../assets/logo.png';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={imgUrl} alt="Kasa Logo" width={150} />
        </Link>
        <ul>
          <li>
            <Link to="/" className="selected">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
