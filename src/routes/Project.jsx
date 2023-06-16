import Collapse from '../components/Collapse'
import Slideshow from '../components/Slideshow'
import React, { useParams } from 'react-router-dom';
import ErrorPage from './error-page';
import projects from '../data/projects';

let slides = [] 

 const Project = () => {
  slides = [];
  let currentId = useParams().id;
  let pageUrl = window.location.pathname;
  const idList = []
  projects.forEach(element => idList.push(element.id))

	if (idList.includes(currentId) && pageUrl === "/Projects/"+currentId) {
    let newSlides = (projects.find(element => element.id === currentId)).pictures
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

export default Project