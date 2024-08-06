import './Banner.scss'

const bannerImages = {
  home: require('../../assets/banner/home.png'),
  about: require('../../assets/banner/about.png'),
}

function Banner({ page, children }) {
  return (
    <div className="banner">
      <img src={bannerImages[page]} alt={`${page} banner`} />
      <div className="overlay"></div>
      {children}
    </div>
  )
}

export default Banner
