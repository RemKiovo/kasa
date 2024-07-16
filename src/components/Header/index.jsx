import { Link } from 'react-router-dom';
import './style.scss';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="https://placeholder.co/80" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
