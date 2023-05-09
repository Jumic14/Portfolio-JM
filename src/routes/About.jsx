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
  </section>
  );
}