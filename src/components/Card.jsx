import accommodations from './../components/Accomodations'
import '../styles/Card.css'

function Card() {
    return (
        <div className='cards-container'>
          
                 {accommodations.map((accomodation) => (
                     <div className='card' key={accomodation.id}>
                        <img src={accomodation.cover} className="card-img" alt="card img" />
                         <span className='card-text'>{accomodation.title}</span>
                        </div>
        ))}
           
        </div>
    )
  }
  
  export default Card