import Banner from './../components/Banner'
import Collapse from '../components/Collapse'

function About() {
  return (
    <section>
    <aside className='banner-about'>
      <Banner />
    </aside>
    <article className='about-article'>
      <Collapse />
    </article>
  </section>
  );
}

export default About;