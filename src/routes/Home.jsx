import Banner from './../components/Banner'
import Card from './../components/Card'
import accommodations from './../components/Accomodations'

export default function Home() {
  return (
    <section>
      <aside className='banner-home'>
        <Banner />
      </aside>
      <article className='cards'>
        <Card props={accommodations}/>
      </article>
    </section>
  )
}
