import kasaLogoWhite from '../assets/logo-white.svg'
import '../styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <img src={kasaLogoWhite} alt="Kasa Logo" width={100} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
