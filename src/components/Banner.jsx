import homeBanner from './../assets/images/banner-home.jpg';
import contactBanner from './../assets/images/banner-contact.jpg';
import '../styles/Banner.css'

export default function Banner() {
  if (window.document.location.pathname !== '/Contact') {
      return (
    <div className='banner-container home'>
        <span className='banner-txt'>Julien, développeur front-end</span>
        <img src={homeBanner} className="banner-img" alt="banner img" />
    </div>
  )} else  {
    return (
      <div className='banner-container contact'>
          <img src={contactBanner} className="banner-img" alt="banner img" />
      </div>
    )
  }
}