import Banner from './../components/Banner'
import Card from './../components/Card'

function Home() {
  return (
    <section>
      <aside className='banner-home'>
        <Banner />
      </aside>
      <article className='cards'>
        <Card />
      </article>
    </section>
  )
}

export default Home
