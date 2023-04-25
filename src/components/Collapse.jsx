import abouts from './Abouts'
import '../styles/Collapse.css'

function Collapse() {
    return (
        <div className='abouts'>
          
                 {abouts.map((about, index) => (
                     <div className='about-container' key={`${about}-${index}`}>
                         <span className='about-title'>{about.title}</span>
                         <span className='about-text'>{about.description}</span>
                        </div>
        ))}
           
        </div>
    )
  }
  
  export default Collapse