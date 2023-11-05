import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import React, { useParams } from "react-router-dom";
import ErrorPage from "./error-page";
import works from "../data/works";
import "../styles/Slideshow.css";

let slides = [];

const Work = () => {
  slides = [];
  let currentId = useParams().id;
  let pageUrl = window.location.pathname;
  const idList = [];
  works.forEach((element) => idList.push(element.id));

  if (idList.includes(currentId) && pageUrl === "/Works/" + currentId) {
    let newSlides = works.find((element) => element.id === currentId).pictures;
    for (const url in newSlides) {
      let newSlide = `${newSlides[url]}`;
      slides.push({ url: newSlide });
    }
    return (
      <section>
        <article className="project">
          <div className="slideshow">
            <div className="containerStyles">
              <Slideshow slides={slides} />
            </div>
          </div>
          <Collapse />
        </article>
      </section>
    );
  } else {
    return <ErrorPage />;
  }
};

export default Work;
