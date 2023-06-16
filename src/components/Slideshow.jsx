import { useState } from "react";
import '../styles/Slideshow.css'

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slidesImage = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  }; 

  if (slides.length !==1) {
  return (
    <div className="sliderStyles">
      <div>
        <div onClick={goToPrevious} className="fa-solid fa-angle-left"></div>
        <div onClick={goToNext} className="fa-solid fa-angle-right"></div>
      </div>
      <div style={slidesImage} className="slider"></div>
      <div className="slideCount">
            {currentIndex + 1}/{slides.length}
      </div>
    </div>
  )
}
else {
  return(
    <div style={slidesImage} className="slider"></div>
  )
};
};

export default Slideshow;