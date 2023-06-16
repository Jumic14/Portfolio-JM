import Banner from './../components/Banner'
import Collapse from '../components/Collapse'


export default function About() {
  return (
    <section>
    <aside className='banner-about'>
      <Banner />

    </aside>
    <article className='about-article'>
    <Collapse />
    </article>
    <div className='about-quote'>
      <p>"Le premier ennemi de la connaissance n'est pas l'ignorance, c'est l'illusion de la connaissance."</p>
      <p>Stephen Hawking</p>
    </div>
  </section>
  );
}