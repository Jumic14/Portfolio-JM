import Banner from './../components/Banner'
import Collapse from '../components/Collapse'
import abouts from '../components/Abouts'

export default function About() {
  return (
    <section>
    <aside className='banner-about'>
      <Banner />
    </aside>
    <article className='about-article'>
      <Collapse props={abouts}/>
    </article>
  </section>
  );
}