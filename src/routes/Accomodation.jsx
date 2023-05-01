import CollapseAccomodation from '../components/CollapseAccomodation'
import accommodations from '../components/Accomodations'

export default function Accomodation() {
    return(
        <section>
        <article className='accomodation'>
        <CollapseAccomodation props={accommodations}/>
        </article>
      </section>
    )
}