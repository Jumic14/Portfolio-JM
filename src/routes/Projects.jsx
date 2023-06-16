import Banner from './../components/Banner'
import Card from './../components/Card'
import projects from '../data/projects'

export default function Home() {
  return (
    <section>
      <aside className='banner-home'>
        <Banner />
      </aside>
      <article className='cards'>
        <Card props={projects}/>
      </article>
    </section>
  )
}