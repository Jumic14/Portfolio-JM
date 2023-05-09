import Collapse from '../components/Collapse'
import datas from '../data/datas'
import Slideshow from '../components/Slideshow'
import React, { useParams } from 'react-router-dom';
import ErrorPage from '../routes/error-page';

let slides = []

 const Accomodation = () => {
  slides = [];
  let currentId = useParams().id;
  let pageUrl = window.location.pathname;
  const idList = []
  datas.forEach(element => idList.push(element.id))

	if (idList.includes(currentId) && pageUrl === "/Accomodation/"+currentId) {
    let newSlides = (datas.find(element => element.id === currentId)).pictures
   for (const url in newSlides) {
    let newSlide = (`${newSlides[url]}`);
    slides.push({url: newSlide});
  }
      return(
          <section>
          <article className='accomodation'>
          <div className="containerStyles">
              <Slideshow slides={slides}/>
            </div>
          <Collapse />
          </article>
        </section>
      )
    } 
    else {
      return(
      <ErrorPage />
      )
    }
 }

export default Accomodation