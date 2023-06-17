import '../styles/Contact.css'
import Banner from './../components/Banner'
import { Link } from 'react-router-dom' 

  
export default function contact() {
  return (
    <section>
        <aside className='banner-contact'>
            <Banner />
        </aside>
        <div className='contact'>
            <span className='contact-title'>On reste en contact ?</span>
            <p>Vous souhaitez en savoir plus sur mon parcours et mes compétences ? Vous souhaitez échanger à propos d'un projet ou d'une opportunité ?</p>
            <p>Vous pouvez me retrouver sur <Link to="https://www.linkedin.com/in/jumic/">Linkedin</Link> où me contacter directement par e-mail : <Link mailto='mailto:michel-julien1@hotmail.fr'>michel-julien1@hotmail.fr</Link></p>
            <p>Merci de votre visite, et à bientôt !</p>
        </div>
    </section>
  )
}
