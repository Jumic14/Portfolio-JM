import homeBanner from './../assets/images/banner-home.png';
import aboutBanner from './../assets/images/banner-about.png';
import '../styles/Banner.css'

export default function Banner() {
  if (window.document.location.href !== 'http://localhost:3000/About') {
      return (
    <div className='banner-container'>
        <span className='banner-txt'>Chez vous, partout et ailleurs</span>
        <img src={homeBanner} className="banner-img" alt="banner img" />
    </div>
  )} else  {
    return (
      <div className='banner-container'>
          <img src={aboutBanner} className="banner-img" alt="banner img" />
      </div>
    )
  }
}