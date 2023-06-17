import Card from './../components/Card'
import projects from '../data/projects'

export default function Home() {
  return (
    <section>
      <article className='cards'>
        <Card props={projects}/>
      </article>
    </section>
  )
}