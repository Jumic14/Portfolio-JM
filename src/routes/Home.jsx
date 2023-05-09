import Banner from './../components/Banner'
import Card from './../components/Card'
import datas from '../data/datas'

export default function Home() {
  return (
    <section>
      <aside className='banner-home'>
        <Banner />
      </aside>
      <article className='cards'>
        <Card props={datas}/>
      </article>
    </section>
  )
}
