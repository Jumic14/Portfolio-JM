import Banner from './../components/Banner'
import { Link } from 'react-router-dom' 

  
export default function Home() {
  return (
    <section>
            <aside className='banner-about'>
      <Banner />

    </aside>
     <div className='contact'>
        <span className='contact-title'>On reste en contact ?</span>
        <p>Que ce soit pour des projet divers et variés, des questions ou tout autres renseignements, je me ferais un plaisir d'échanger avec vous sur <Link to="https://www.linkedin.com/in/jumic/">Linkedin</Link> où par <Link to='mailto:michel-julien1@hotmail.fr'>e-mail</Link> !</p>
        <p>Vous pouvez également télécharger mon  <a href="cv.pdf" download>CV</a></p>
        <p>Merci de votre visite, et à bientôt !</p>
       
     </div>
    </section>
  )
}
