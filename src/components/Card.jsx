import '../styles/Card.css'
import { Link } from 'react-router-dom' 

export default function Card({props}) {
    return (
        <div className='cards-container'>
           
            {props.map((prop) => (
                <div className='card' key={prop.id} >
                     { <Link to={"/Accomodation/"+prop.id}> 
                     <img src={prop.cover} className="card-img" alt="card img" />
                    <span className='card-text'>{prop.title}</span>
                    </Link> }
                   
                </div>
            ))}
            
        </div>
    )

}
